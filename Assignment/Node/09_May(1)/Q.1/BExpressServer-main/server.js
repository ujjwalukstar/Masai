// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Route for Home Page
app.get('/home', (req, res) => {
  res.status(200).send('<h1>Welcome to Home Page</h1>');
});

// Route for About Us Page
app.get('/aboutus', (req, res) => {
  res.status(200).json({ message: 'Welcome to About Us' });
});

// Route for Contact Us Page
app.get('/contactus', (req, res) => {
  const contactDetails = {
    email: 'contact@example.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, City, Country'
  };
  res.status(200).json(contactDetails);
});

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});