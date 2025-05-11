const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todoController');

// Get all todos
router.get('/', TodoController.getAllTodos);

// Search todos by title (partial match)
router.get('/search', TodoController.searchTodos);

// Get a specific todo by ID
router.get('/:id', TodoController.getTodoById);

// Create a new todo
router.post('/', TodoController.createTodo);

// Update a todo
router.put('/:id', TodoController.updateTodo);

// Delete a todo
router.delete('/:id', TodoController.deleteTodo);

module.exports = router;