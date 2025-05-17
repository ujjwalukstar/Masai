// routes/api.js
const express = require('express');
const router = express.Router();
const apiLimiter = require('../middlewares/rateLimiter');

// Public endpoint (no rate limiting)
router.get('/public', (req, res) => {
  res.json({ message: "This is a public endpoint!" });
});

// Limited endpoint (rate limited to 5 requests per minute)
router.get('/limited', apiLimiter, (req, res) => {
  res.json({ message: "You have access to this limited endpoint!" });
});

module.exports = router;