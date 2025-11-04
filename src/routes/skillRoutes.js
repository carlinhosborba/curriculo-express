// src/routes/skillRoutes.js
const { Router } = require('express');
const router = Router();
const { Skill, PersonSkill } = require('../../models');

// 🔹 Listar todas as skills cadastradas
router.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.findAll({ order: [['name', 'ASC']] });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Listar skills de uma pessoa (por personId)
router.get('/persons/:personId/skills', async (req, res) => {
  try {
    const { personId } = req.params;
    const items = await PersonSkill.findAll({
      where: { personId },
      include: [{ model: Skill, as: 'skill' }]
    });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Adicionar skill a uma pessoa
router.post('/persons/:personId/skills', async (req, res) => {
  try {
    const { personId } = req.params;
    const { skillId, proficiency } = req.body;
    const created = await PersonSkill.create({ personId, skillId, proficiency });
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
// 🔹 Atualizar proficiência de uma skill para a pessoa
router.put('/persons/:personId/skills/:skillId', async (req, res) => {
  try {
    const { personId, skillId } = req.params;
    const { proficiency } = req.body;

    if (!proficiency) {
      return res.status(400).json({ error: 'proficiency é obrigatório.' });
    }

    const link = await PersonSkill.findOne({ where: { personId, skillId } });
    if (!link) {
      return res.status(404).json({ error: 'Associação não encontrada.' });
    }

    await link.update({ proficiency });
    res.json(link);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// 🔹 Remover associação de skill da pessoa
router.delete('/persons/:personId/skills/:skillId', async (req, res) => {
  try {
    const { personId, skillId } = req.params;
    const link = await PersonSkill.findOne({ where: { personId, skillId } });
    if (!link) return res.status(404).json({ error: 'Associação não encontrada.' });
    await link.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
