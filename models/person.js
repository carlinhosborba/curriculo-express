'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      // Associação 1:N com Education
      Person.hasMany(models.Education, { foreignKey: 'personId', as: 'educations' });

      // Associação 1:N com Experience
      Person.hasMany(models.Experience, { foreignKey: 'personId', as: 'experiences' });

      // Associação 1:N com Project
      Person.hasMany(models.Project, { foreignKey: 'personId', as: 'projects' });

      // Associação N:N com Skill
      Person.belongsToMany(models.Skill, {
        through: models.PersonSkill,
        foreignKey: 'personId',
        otherKey: 'skillId',
        as: 'skills'
      });
    }
  }

  Person.init(
    {
      fullName: { type: DataTypes.STRING(180), allowNull: false },
      headline: { type: DataTypes.STRING(200) },
      email: { type: DataTypes.STRING(180), allowNull: false, unique: true },
      phone: { type: DataTypes.STRING(40) },
      location: { type: DataTypes.STRING(120) },
      about: { type: DataTypes.TEXT },
      website: { type: DataTypes.STRING(255) }
    },
    {
      sequelize,
      modelName: 'Person',
      tableName: 'persons' // 👈 garante o mesmo nome usado na migration
    }
  );

  return Person;
};
