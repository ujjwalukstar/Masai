const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const libraryRoutes = require('./routes/library.routes');

const app = express();
const PORT = 3000;

connectDB();
app.use(bodyParser.json());
app.use('/api', libraryRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
