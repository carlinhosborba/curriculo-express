'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const allConfigs = require(path.join(__dirname, '..', 'config', 'config.js'));
const config = allConfigs[env];

const db = {};
let sequelize;

if (config.use_env_variable && process.env[config.use_env_variable]) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter((f) => f !== basename && f.endsWith('.js'))
  .forEach((f) => {
    const model = require(path.join(__dirname, f))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((name) => {
  if (db[name].associate) db[name].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
