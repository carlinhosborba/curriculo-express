'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    static associate(models) {
      Experience.belongsTo(models.Person, { foreignKey: 'personId', as: 'person' });
    }
  }

  Experience.init(
    {
      personId: { type: DataTypes.INTEGER, allowNull: false },
      company: { type: DataTypes.STRING(180), allowNull: false },
      role: { type: DataTypes.STRING(160), allowNull: false },
      employmentType: { type: DataTypes.STRING(60) },
      startDate: { type: DataTypes.DATE },
      endDate: { type: DataTypes.DATE },
      location: { type: DataTypes.STRING(120) },
      description: { type: DataTypes.TEXT },
      isCurrent: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {
      sequelize,
      modelName: 'Experience',
      tableName: 'experiences'
    }
  );

  return Experience;
};
