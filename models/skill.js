'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    static associate(models) {
      // N:N com Person via PersonSkill
      Skill.belongsToMany(models.Person, {
        through: models.PersonSkill,
        foreignKey: 'skillId',
        otherKey: 'personId',
        as: 'persons'
      });
      // Acesso direto aos vínculos (opcional)
      Skill.hasMany(models.PersonSkill, { foreignKey: 'skillId', as: 'personSkills' });
    }
  }

  Skill.init(
    {
      name: { type: DataTypes.STRING(120), allowNull: false, unique: true },
      category: { type: DataTypes.STRING(120) }
    },
    {
      sequelize,
      modelName: 'Skill',
      tableName: 'skills'
    }
  );

  return Skill;
};
