const BookModel = require('../models/bookModel');

class AdminController {
  static async getAllBooks(req, res) {
    try {
      const books = await BookModel.getAllBooks();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch books' });
    }
  }

  static async createBook(req, res) {
    try {
      const { title, author, genre, publishedYear } = req.body;
      
      if (!title || !author || !genre || !publishedYear) {
        return res.status(400).json({ error: 'All fields are required' });
      }
      
      const newBook = await BookModel.createBook({
        title,
        author,
        genre,
        publishedYear: parseInt(publishedYear)
      });
      
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create book' });
    }
  }

  static async updateBook(req, res) {
    try {
      const { id } = req.params;
      const updatedBook = await BookModel.updateBook(id, req.body);
      
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      
      res.status(200).json(updatedBook);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update book' });
    }
  }

  static async deleteBook(req, res) {
    try {
      const { id } = req.params;
      const isDeleted = await BookModel.deleteBook(id);
      
      if (!isDeleted) {
        return res.status(404).json({ error: 'Book not found' });
      }
      
      res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete book' });
    }
  }
}

module.exports = AdminController;