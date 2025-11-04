'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Education extends Model {
    static associate(models) {
      Education.belongsTo(models.Person, { foreignKey: 'personId', as: 'person' });
    }
  }

  Education.init(
    {
      personId: { type: DataTypes.INTEGER, allowNull: false },
      school: { type: DataTypes.STRING(180), allowNull: false },
      degree: { type: DataTypes.STRING(120) },
      field: { type: DataTypes.STRING(120) },
      startDate: { type: DataTypes.DATE },
      endDate: { type: DataTypes.DATE },
      description: { type: DataTypes.TEXT }
    },
    {
      sequelize,
      modelName: 'Education',
      tableName: 'educations'
    }
  );

  return Education;
};
