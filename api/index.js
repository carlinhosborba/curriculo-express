// api/index.js
// 👇 força o Vercel a incluir os pacotes no bundle
require('pg');
require('pg-hstore');

const app = require('../src/app');
module.exports = (req, res) => app(req, res);
