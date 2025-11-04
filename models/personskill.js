'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PersonSkill extends Model {
    static associate(models) {
      PersonSkill.belongsTo(models.Person, { foreignKey: 'personId', as: 'person' });
      PersonSkill.belongsTo(models.Skill, { foreignKey: 'skillId', as: 'skill' });
    }
  }

  PersonSkill.init(
    {
      personId: { type: DataTypes.INTEGER, allowNull: false },
      skillId: { type: DataTypes.INTEGER, allowNull: false },
      proficiency: { type: DataTypes.STRING(30) } // Beginner | Intermediate | Advanced
    },
    {
      sequelize,
      modelName: 'PersonSkill',
      tableName: 'person_skills'
    }
  );

  return PersonSkill;
};
