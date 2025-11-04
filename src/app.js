const express = require('express');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

// Rota raiz (evita "Cannot GET /")
app.get('/', (req, res) => {
  res.send('Currículo Express API — visite /api/v1 ou /api/v1/health');
});

// Healthcheck
app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Rotas principais
app.use('/api/v1', routes);

module.exports = app;
