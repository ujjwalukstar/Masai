// app.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/task.routes');

const app = express();
const PORT = 3000;

connectDB();
app.use(bodyParser.json());
app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
