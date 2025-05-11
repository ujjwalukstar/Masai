const BookModel = require('../models/bookModel');

class ReaderController {
  static async getAvailableBooks(req, res) {
    try {
      const books = await BookModel.getAvailableBooks();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch available books' });
    }
  }

  static async borrowBook(req, res) {
    try {
      const { id } = req.params;
      const { readerName } = req.body;
      
      if (!readerName) {
        return res.status(400).json({ error: 'Reader name is required' });
      }
      
      const borrowedBook = await BookModel.borrowBook(id, readerName);
      
      if (!borrowedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      
      if (borrowedBook === false) {
        return res.status(400).json({ error: 'Book is not available for borrowing' });
      }
      
      res.status(200).json(borrowedBook);
    } catch (error) {
      res.status(500).json({ error: 'Failed to borrow book' });
    }
  }

  static async returnBook(req, res) {
    try {
      const { id } = req.params;
      const returnedBook = await BookModel.returnBook(id);
      
      if (!returnedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      
      if (returnedBook === false) {
        return res.status(400).json({ error: 'Book is not currently borrowed' });
      }
      
      res.status(200).json(returnedBook);
    } catch (error) {
      res.status(500).json({ error: 'Failed to return book' });
    }
  }
}

module.exports = ReaderController;