const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Currículo Express API v1' });
});

module.exports = router;
