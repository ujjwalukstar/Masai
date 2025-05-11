const BookModel = require('../models/bookModel');

async function checkReturnEligibility(req, res, next) {
  try {
    const book = await BookModel.getBookById(req.params.id);
    
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    
    if (book.status !== 'borrowed') {
      return res.status(400).json({ error: 'Book is not currently borrowed' });
    }
    
    const borrowedDate = new Date(book.borrowedDate);
    const currentDate = new Date();
    const daysDiff = (currentDate - borrowedDate) / (1000 * 60 * 60 * 24);
    
    if (daysDiff < 3) {
      return res.status(400).json({ 
        error: 'Book cannot be returned within 3 days of borrowing.' 
      });
    }
    
    next();
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = checkReturnEligibility;