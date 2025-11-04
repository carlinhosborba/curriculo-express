// src/routes/experienceRoutes.js
const { Router } = require('express');
const router = Router();
const { Experience } = require('../../models');

// Listar experiências de uma pessoa
router.get('/persons/:personId/experiences', async (req, res) => {
  try {
    const { personId } = req.params;
    const items = await Experience.findAll({ where: { personId }, order: [['startDate', 'DESC']] });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Criar experiência
router.post('/persons/:personId/experiences', async (req, res) => {
  try {
    const { personId } = req.params;
    const payload = { ...req.body, personId };
    const created = await Experience.create(payload);
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Atualizar experiência
router.put('/experiences/:id', async (req, res) => {
  try {
    const exp = await Experience.findByPk(req.params.id);
    if (!exp) return res.status(404).json({ error: 'Experience não encontrada.' });
    await exp.update(req.body);
    res.json(exp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Deletar experiência
router.delete('/experiences/:id', async (req, res) => {
  try {
    const exp = await Experience.findByPk(req.params.id);
    if (!exp) return res.status(404).json({ error: 'Experience não encontrada.' });
    await exp.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
