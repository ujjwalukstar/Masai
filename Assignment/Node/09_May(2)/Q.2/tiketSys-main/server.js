const express = require('express');
const app = express();
const ticketRoutes = require('./routes/ticketRoutes');
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/tickets', ticketRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: '404 Not Found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});