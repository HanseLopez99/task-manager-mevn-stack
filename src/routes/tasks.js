const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.send('Tareas desde el servidor');
});

module.exports = router;
