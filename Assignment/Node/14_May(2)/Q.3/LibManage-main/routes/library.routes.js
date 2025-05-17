const express = require('express');
const router = express.Router();
const controller = require('../controllers/library.controller');
const { validateBookData, checkBorrowLimit } = require('../middleware/library.middleware');

router.post('/library/books', validateBookData, controller.addBook);
router.get('/library/books', controller.getBooks);
router.patch('/library/borrow/:id', checkBorrowLimit, controller.borrowBook);
router.patch('/library/return/:id', controller.returnBook);
router.delete('/library/books/:id', controller.deleteBook);

module.exports = router;
