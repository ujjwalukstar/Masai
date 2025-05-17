// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['not-started', 'ongoing', 'completed'], default: 'not-started' },
  dueDate: Date
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);
