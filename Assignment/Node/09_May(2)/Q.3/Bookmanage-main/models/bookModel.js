const fs = require('fs').promises;
const path = require('path');

const DB_PATH = path.join(__dirname, '../db.json');

class BookModel {
  static async getAllBooks() {
    try {
      const data = await fs.readFile(DB_PATH, 'utf8');
      return JSON.parse(data).books || [];
    } catch (error) {
      if (error.code === 'ENOENT') {
        await this.writeBooks([]);
        return [];
      }
      throw error;
    }
  }

  static async getBookById(id) {
    const books = await this.getAllBooks();
    return books.find(book => book.id === parseInt(id));
  }

  static async getAvailableBooks() {
    const books = await this.getAllBooks();
    return books.filter(book => book.status === 'available');
  }

  static async createBook(newBook) {
    const books = await this.getAllBooks();
    const book = {
      id: books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1,
      status: 'available',
      ...newBook
    };
    books.push(book);
    await this.writeBooks(books);
    return book;
  }

  static async updateBook(id, updatedData) {
    const books = await this.getAllBooks();
    const index = books.findIndex(book => book.id === parseInt(id));
    
    if (index === -1) return null;
    
    const updatedBook = {
      ...books[index],
      ...updatedData
    };
    books[index] = updatedBook;
    await this.writeBooks(books);
    return updatedBook;
  }

  static async deleteBook(id) {
    const books = await this.getAllBooks();
    const initialLength = books.length;
    const filteredBooks = books.filter(book => book.id !== parseInt(id));
    
    if (filteredBooks.length === initialLength) return false;
    
    await this.writeBooks(filteredBooks);
    return true;
  }

  static async borrowBook(id, readerName) {
    const books = await this.getAllBooks();
    const index = books.findIndex(book => book.id === parseInt(id));
    
    if (index === -1) return null;
    if (books[index].status !== 'available') return false;
    
    const borrowedBook = {
      ...books[index],
      status: 'borrowed',
      borrowedBy: readerName,
      borrowedDate: new Date().toISOString()
    };
    books[index] = borrowedBook;
    await this.writeBooks(books);
    return borrowedBook;
  }

  static async returnBook(id) {
    const books = await this.getAllBooks();
    const index = books.findIndex(book => book.id === parseInt(id));
    
    if (index === -1) return null;
    if (books[index].status !== 'borrowed') return false;
    
    const returnedBook = {
      ...books[index],
      status: 'available',
      borrowedBy: null,
      borrowedDate: null
    };
    books[index] = returnedBook;
    await this.writeBooks(books);
    return returnedBook;
  }

  static async writeBooks(books) {
    await fs.writeFile(DB_PATH, JSON.stringify({ books }, null, 2), 'utf8');
  }
}

module.exports = BookModel;