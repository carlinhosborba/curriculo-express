// config/config.js
require('dotenv').config();

const common = {
  dialect: 'postgres',
  dialectOptions: {
    // Vercel + Neon precisam disso
    ssl: { require: true, rejectUnauthorized: false }
  },
  logging: false
};

module.exports = {
  development: { ...common, use_env_variable: 'DATABASE_URL' },
  test:        { ...common, use_env_variable: 'DATABASE_URL' },
  production:  { ...common, use_env_variable: 'DATABASE_URL' }
};
