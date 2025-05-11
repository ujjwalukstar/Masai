const TodoModel = require('../models/todoModel');

class TodoController {
  static async getAllTodos(req, res) {
    try {
      const todos = await TodoModel.getAllTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch todos' });
    }
  }

  static async getTodoById(req, res) {
    try {
      const todo = await TodoModel.getTodoById(req.params.id);
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch todo' });
    }
  }

  static async searchTodos(req, res) {
    try {
      const { q } = req.query;
      if (!q) {
        return res.status(400).json({ error: 'Search query is required' });
      }
      const todos = await TodoModel.searchTodos(q);
      if (todos.length === 0) {
        return res.status(404).json({ message: 'No todos found' });
      }
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Failed to search todos' });
    }
  }

  static async createTodo(req, res) {
    try {
      const { title, completed = false } = req.body;
      if (!title) {
        return res.status(400).json({ error: 'Title is required' });
      }
      const newTodo = await TodoModel.createTodo({ title, completed });
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create todo' });
    }
  }

  static async updateTodo(req, res) {
    try {
      const { id } = req.params;
      const updatedTodo = await TodoModel.updateTodo(id, req.body);
      if (!updatedTodo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update todo' });
    }
  }

  static async deleteTodo(req, res) {
    try {
      const { id } = req.params;
      const isDeleted = await TodoModel.deleteTodo(id);
      if (!isDeleted) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete todo' });
    }
  }
}

module.exports = TodoController;