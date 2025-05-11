const fs = require('fs').promises;
const path = require('path');

const DB_PATH = path.join(__dirname, '../db.json');

class TodoModel {
  static async getAllTodos() {
    try {
      const data = await fs.readFile(DB_PATH, 'utf8');
      return JSON.parse(data).todos || [];
    } catch (error) {
      if (error.code === 'ENOENT') {
        await this.writeTodos([]);
        return [];
      }
      throw error;
    }
  }

  static async getTodoById(id) {
    const todos = await this.getAllTodos();
    return todos.find(todo => todo.id === parseInt(id));
  }

  static async searchTodos(query) {
    const todos = await this.getAllTodos();
    const searchTerm = query.toLowerCase();
    return todos.filter(todo => 
      todo.title.toLowerCase().includes(searchTerm)
    );
  }

  static async createTodo(newTodo) {
    const todos = await this.getAllTodos();
    const todo = {
      id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
      ...newTodo,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    todos.push(todo);
    await this.writeTodos(todos);
    return todo;
  }

  static async updateTodo(id, updatedData) {
    const todos = await this.getAllTodos();
    const index = todos.findIndex(todo => todo.id === parseInt(id));
    
    if (index === -1) return null;
    
    const updatedTodo = {
      ...todos[index],
      ...updatedData,
      updatedAt: new Date().toISOString()
    };
    todos[index] = updatedTodo;
    await this.writeTodos(todos);
    return updatedTodo;
  }

  static async deleteTodo(id) {
    const todos = await this.getAllTodos();
    const initialLength = todos.length;
    const filteredTodos = todos.filter(todo => todo.id !== parseInt(id));
    
    if (filteredTodos.length === initialLength) return false;
    
    await this.writeTodos(filteredTodos);
    return true;
  }

  static async writeTodos(todos) {
    await fs.writeFile(DB_PATH, JSON.stringify({ todos }, null, 2), 'utf8');
  }
}

module.exports = TodoModel;