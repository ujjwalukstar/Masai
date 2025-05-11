const express = require('express');
const app = express();
const adminRoutes = require('./routes/adminRoutes');
const readerRoutes = require('./routes/readerRoutes');
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/admin', adminRoutes);
app.use('/reader', readerRoutes);

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