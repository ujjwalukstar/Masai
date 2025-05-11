// server.js
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Path to our database file
const DB_PATH = path.join(__dirname, 'db.json');

// Helper function to read books from db.json
async function readBooks() {
  try {
    const data = await fs.readFile(DB_PATH, 'utf8');
    return JSON.parse(data).books || [];
  } catch (error) {
    if (error.code === 'ENOENT') {
      // If file doesn't exist, create it with empty books array
      await writeBooks([]);
      return [];
    }
    throw error;
  }
}

// Helper function to write books to db.json
async function writeBooks(books) {
  await fs.writeFile(DB_PATH, JSON.stringify({ books }, null, 2), 'utf8');
}

// POST /books - Add a new book
app.post('/books', async (req, res) => {
  try {
    const { title, author, year } = req.body;
    
    if (!title || !author || !year) {
      return res.status(400).json({ error: "Title, author, and year are required" });
    }

    const books = await readBooks();
    const newBook = {
      id: books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1,
      title,
      author,
      year: parseInt(year)
    };
    
    books.push(newBook);
    await writeBooks(books);
    
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET /books - Retrieve all books
app.get('/books', async (req, res) => {
  try {
    const books = await readBooks();
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET /books/:id - Retrieve a book by ID
app.get('/books/:id', async (req, res) => {
  try {
    const books = await readBooks();
    const book = books.find(b => b.id === parseInt(req.params.id));
    
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT /books/:id - Update a book by ID
app.put('/books/:id', async (req, res) => {
  try {
    const books = await readBooks();
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    
    if (index === -1) {
      return res.status(404).json({ message: "Book not found" });
    }
    
    const updatedBook = { 
      ...books[index], 
      ...req.body,
      id: books[index].id // Ensure ID can't be changed
    };
    books[index] = updatedBook;
    await writeBooks(books);
    
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE /books/:id - Delete a book by ID
app.delete('/books/:id', async (req, res) => {
  try {
    let books = await readBooks();
    const initialLength = books.length;
    books = books.filter(b => b.id !== parseInt(req.params.id));
    
    if (books.length === initialLength) {
      return res.status(404).json({ message: "Book not found" });
    }
    
    await writeBooks(books);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET /books/search - Search books by author or title (with partial matching)
app.get('/books/search', async (req, res) => {
  try {
    const { author, title } = req.query;
    
    if (!author && !title) {
      return res.status(400).json({ error: "Author or title query parameter is required" });
    }

    const books = await readBooks();
    let matchingBooks = [];

    if (author) {
      const authorTerm = author.toLowerCase();
      matchingBooks = books.filter(b => 
        b.author.toLowerCase().includes(authorTerm)
      );
    }

    if (title) {
      const titleTerm = title.toLowerCase();
      const titleMatches = books.filter(b => 
        b.title.toLowerCase().includes(titleTerm)
      );
      
      // Combine results if both author and title were provided
      matchingBooks = author ? 
        matchingBooks.filter(book => 
          titleMatches.some(match => match.id === book.id)
        ) : 
        titleMatches;
    }
    
    if (matchingBooks.length > 0) {
      res.status(200).json(matchingBooks);
    } else {
      res.status(404).json({ message: "No books found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});