const express = require('express');
const router = express.Router();
const ReaderController = require('../controllers/readerController');
const requestLogger = require('../middlewares/loggerMiddleware');
const checkReturnEligibility = require('../middlewares/returnCheckMiddleware');
const transactionLogger = require('../middlewares/transactionLogger');

router.use(requestLogger);
router.use(transactionLogger);

// Get available books
router.get('/books', ReaderController.getAvailableBooks);

// Borrow a book
router.post('/borrow/:id', ReaderController.borrowBook);

// Return a book
router.post('/return/:id', checkReturnEligibility, ReaderController.returnBook);

module.exports = router;