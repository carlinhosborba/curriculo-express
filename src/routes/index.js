const { Router } = require('express');
const router = Router();

const personRoutes = require('./personRoutes');
const educationRoutes = require('./educationRoutes');
const experienceRoutes = require('./experienceRoutes');
const projectRoutes = require('./projectRoutes');
const skillRoutes = require('./skillRoutes'); // 👈 nova linha

// Conecta todas as rotas
router.use('/persons', personRoutes);
router.use('/', educationRoutes);
router.use('/', experienceRoutes);
router.use('/', projectRoutes);
router.use('/', skillRoutes); // 👈 nova linha

// Rota padrão
router.get('/', (req, res) => {
  res.json({ message: 'Currículo Express API v1' });
});

module.exports = router;
