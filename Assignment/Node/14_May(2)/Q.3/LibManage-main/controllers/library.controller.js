const LibraryItem = require('../models/library.model');

// Add Book
exports.addBook = async (req, res) => {
  try {
    const book = new LibraryItem({ ...req.body, status: 'available' });
    await book.save();
    res.status(201).json({ message: 'Book added successfully', book });
  } catch (err) {
    res.status(500).json({ message: 'Error adding book', error: err.message });
  }
};

// Borrow Book
exports.borrowBook = async (req, res) => {
  try {
    const book = await LibraryItem.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    if (book.status !== 'available') {
      return res.status(409).json({ message: 'Book is not available for borrowing' });
    }

    const borrowDate = new Date();
    const dueDate = new Date(borrowDate);
    dueDate.setDate(dueDate.getDate() + 14);

    book.status = 'borrowed';
    book.borrowerName = req.body.borrowerName;
    book.borrowDate = borrowDate;
    book.dueDate = dueDate;
    await book.save();

    res.status(200).json({ message: 'Book borrowed successfully', book });
  } catch (err) {
    res.status(500).json({ message: 'Error borrowing book', error: err.message });
  }
};

// Return Book
exports.returnBook = async (req, res) => {
  try {
    const book = await LibraryItem.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    if (book.status !== 'borrowed') {
      return res.status(409).json({ message: 'Book is not currently borrowed' });
    }

    const today = new Date();
    let overdueFees = 0;

    if (book.dueDate && today > book.dueDate) {
      const overdueDays = Math.ceil((today - book.dueDate) / (1000 * 60 * 60 * 24));
      overdueFees = overdueDays * 10;
    }

    book.status = 'available';
    book.returnDate = today;
    book.overdueFees = overdueFees;
    book.borrowerName = null;
    book.borrowDate = null;
    book.dueDate = null;

    await book.save();

    res.status(200).json({
      message: overdueFees > 0
        ? `Book returned with Rs. ${overdueFees} overdue fee`
        : 'Book returned on time',
      book
    });
  } catch (err) {
    res.status(500).json({ message: 'Error returning book', error: err.message });
  }
};

// Get Books
exports.getBooks = async (req, res) => {
  try {
    const { title, status } = req.query;
    const filter = {};
    if (title) filter.title = new RegExp(title, 'i');
    if (status) filter.status = status;

    const books = await LibraryItem.find(filter);
    res.status(200).json({ books });
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving books', error: err.message });
  }
};

// Delete Book
exports.deleteBook = async (req, res) => {
  try {
    const book = await LibraryItem.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    if (book.status === 'borrowed') {
      return res.status(409).json({ message: 'Cannot delete a borrowed book' });
    }

    await LibraryItem.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting book', error: err.message });
  }
};
