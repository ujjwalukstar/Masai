const BookModel = require('../models/bookModel');

async function logTransaction(req, res, next) {
  const originalJson = res.json;
  
  res.json = async function(data) {
    if (req.originalUrl.includes('/borrow/') && res.statusCode === 200) {
      const book = await BookModel.getBookById(req.params.id);
      console.log(
        `[${new Date().toISOString()}] ${req.body.readerName} borrowed "${book.title}"`
      );
    }
    else if (req.originalUrl.includes('/return/') && res.statusCode === 200) {
      const book = await BookModel.getBookById(req.params.id);
      console.log(
        `[${new Date().toISOString()}] ${book.borrowedBy} returned "${book.title}"`
      );
    }
    
    originalJson.call(this, data);
  };
  
  next();
}

module.exports = logTransaction;