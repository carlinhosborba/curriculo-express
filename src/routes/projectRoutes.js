// src/routes/projectRoutes.js
const { Router } = require('express');
const router = Router();
const { Project } = require('../../models');

// 🔹 Listar projetos de uma pessoa
router.get('/persons/:personId/projects', async (req, res) => {
  try {
    const { personId } = req.params;
    const items = await Project.findAll({
      where: { personId },
      order: [['startDate', 'DESC']]
    });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Criar projeto
router.post('/persons/:personId/projects', async (req, res) => {
  try {
    const { personId } = req.params;
    const payload = { ...req.body, personId };
    const created = await Project.create(payload);
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Atualizar projeto
router.put('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project não encontrado.' });
    await project.update(req.body);
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Deletar projeto
router.delete('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project não encontrado.' });
    await project.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
