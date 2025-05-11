const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController');
const requestLogger = require('../middlewares/loggerMiddleware');

router.use(requestLogger);

// Get all books
router.get('/books', AdminController.getAllBooks);

// Create a new book
router.post('/books', AdminController.createBook);

// Update a book
router.patch('/books/:id', AdminController.updateBook);

// Delete a book
router.delete('/books/:id', AdminController.deleteBook);

module.exports = router;