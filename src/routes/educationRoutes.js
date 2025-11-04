// src/routes/educationRoutes.js
const { Router } = require('express');
const router = Router();
const { Education } = require('../../models');

// Listar formações de uma pessoa
router.get('/persons/:personId/educations', async (req, res) => {
  try {
    const { personId } = req.params;
    const educations = await Education.findAll({ where: { personId } });
    res.json(educations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Criar formação
router.post('/persons/:personId/educations', async (req, res) => {
  try {
    const { personId } = req.params;
    const { school, degree, field, startDate, endDate, description } = req.body;
    const created = await Education.create({ personId, school, degree, field, startDate, endDate, description });
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Atualizar formação
router.put('/educations/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { school, degree, field, startDate, endDate, description } = req.body;
    const education = await Education.findByPk(id);
    if (!education) return res.status(404).json({ error: 'Education não encontrada.' });
    await education.update({ school, degree, field, startDate, endDate, description });
    res.json(education);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Deletar formação
router.delete('/educations/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const education = await Education.findByPk(id);
    if (!education) return res.status(404).json({ error: 'Education não encontrada.' });
    await education.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
