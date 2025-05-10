// index.js
const express = require('express');
const app = express();

// Route for /home
app.get('/home', (req, res) => {
  res.json({ message: 'This is home page' });
});

// Route for /contactus
app.get('/contactus', (req, res) => {
  res.json({ message: 'Contact us at contact@contact.com' });
});

// Bonus Route for /about
app.get('/about', (req, res) => {
  res.json({ message: 'Welcome to the About page!' });
});

// Start the server and log when it's running
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
