// middleware/task.middleware.js
const allowedPriorities = ['low', 'medium', 'high'];

exports.validateTask = (req, res, next) => {
  const { title, description, priority } = req.body;

  if (!title || !description || !priority) {
    return res.status(400).json({ message: 'Incomplete Data Received' });
  }

  if (!allowedPriorities.includes(priority.toLowerCase())) {
    return res.status(400).json({ message: 'Invalid priority value. Use low, medium, or high' });
  }

  req.body.priority = priority.toLowerCase(); // Normalize case
  next();
};
