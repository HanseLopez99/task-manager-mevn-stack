const { Router } = require('express');
const router = Router();

const Task = require('../models/Task');

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(200).send({ code: 1, status: 'Task Saved' });
});

router.put('/:id', async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send({ code: 1, status: 'Task Updated' });
});

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.status(200).send({ code: 1, status: 'Task Deleted' });
});

module.exports = router;
