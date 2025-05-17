// controllers/task.controller.js
const Task = require('../models/task.model');

// Create
exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const existing = await Task.findOne({ title });
    if (existing) return res.status(400).json({ message: 'Title must be unique' });

    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Read
exports.getTasks = async (req, res) => {
  try {
    const { priority, isCompleted } = req.query;
    const filter = {};
    if (priority) filter.priority = priority.toLowerCase();
    if (isCompleted !== undefined) filter.isCompleted = isCompleted === 'true';
    const tasks = await Task.find(filter);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
exports.updateTask = async (req, res) => {
  try {
    const updates = {};
    const { title, description, priority, isCompleted } = req.body;

    if (title) updates.title = title;
    if (description) updates.description = description;
    if (priority) {
      const allowed = ['low', 'medium', 'high'];
      if (!allowed.includes(priority.toLowerCase())) {
        return res.status(400).json({ message: 'Invalid priority value' });
      }
      updates.priority = priority.toLowerCase();
    }

    if (isCompleted === true) {
      updates.isCompleted = true;
      updates.completionDate = new Date();
    }

    const updated = await Task.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!updated) return res.status(404).json({ message: 'Task not found' });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
exports.deleteTasks = async (req, res) => {
  try {
    const { priority } = req.query;
    if (!priority) return res.status(400).json({ message: 'Missing priority filter' });

    const deleted = await Task.deleteMany({ priority: priority.toLowerCase() });
    res.json({ message: `${deleted.deletedCount} task(s) deleted` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
