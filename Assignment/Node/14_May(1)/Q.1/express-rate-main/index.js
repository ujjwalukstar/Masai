const express = require('express');
const rateLimit = require('express-rate-limit');
const apiRouter = require('./routes/api');

const app = express();

// Apply rate limiting only to specific routes by adding it in the router
app.use('/api', apiRouter);

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});