const { Router } = require('express');
const router = Router();

const Task = require('../models/Task');

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.json({ message: error });
  }
});

// GET one task
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (error) {
    res.json({ message: error });
  }
});

// POST one task
router.post('/', async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
    });
    const savedTask = await task.save();
    res.json({ message: 'Task saved', savedTask });
  } catch (error) {
    res.json({ message: error });
  }
});

// PUT one task
router.put('/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
      },
      { new: true }
    );
    res.json({ message: 'Task updated', updatedTask });
  } catch (error) {
    res.json({ message: error });
  }
});

// DELETE one task
router.delete('/:id', async (req, res) => {
  try {
    const removedTask = await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted', removedTask });
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
