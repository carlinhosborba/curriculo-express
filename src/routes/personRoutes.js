// src/routes/personRoutes.js
const { Router } = require('express');
const router = Router();
const { Person } = require('../../models');

// Listar todas as pessoas
router.get('/', async (req, res) => {
  try {
    const persons = await Person.findAll();
    res.json(persons);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao listar pessoas.' });
  }
});

// Obter 1 pessoa por ID
router.get('/:id', async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).json({ error: 'Person não encontrada.' });
    res.json(person);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar pessoa.' });
  }
});

// Criar pessoa
router.post('/', async (req, res) => {
  try {
    const { fullName, email, headline, phone, location, about, website } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ error: 'fullName e email são obrigatórios.' });
    }

    const created = await Person.create({
      fullName, email, headline, phone, location, about, website
    });

    res.status(201).json(created);
  } catch (err) {
    console.error(err);

    // Erro de e-mail duplicado
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ error: 'E-mail já cadastrado.' });
    }

    res.status(500).json({ error: 'Erro ao criar pessoa.' });
  }
});

// Atualizar pessoa (PUT = substituição completa)
router.put('/:id', async (req, res) => {
  try {
    const { fullName, email, headline, phone, location, about, website } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ error: 'fullName e email são obrigatórios.' });
    }

    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).json({ error: 'Person não encontrada.' });

    await person.update({ fullName, email, headline, phone, location, about, website });
    res.json(person);
  } catch (err) {
    console.error(err);

    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ error: 'E-mail já cadastrado.' });
    }
    res.status(500).json({ error: 'Erro ao atualizar pessoa.' });
  }
});

// Remover pessoa
router.delete('/:id', async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).json({ error: 'Person não encontrada.' });

    await person.destroy();
    res.status(204).send(); // sem conteúdo
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao deletar pessoa.' });
  }
});

module.exports = router;
