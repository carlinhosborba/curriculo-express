'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      Project.belongsTo(models.Person, { foreignKey: 'personId', as: 'person' });
    }
  }

  Project.init(
    {
      personId: { type: DataTypes.INTEGER, allowNull: false },
      name: { type: DataTypes.STRING(180), allowNull: false },
      description: { type: DataTypes.TEXT },
      url: { type: DataTypes.STRING(255) },
      repoUrl: { type: DataTypes.STRING(255) },
      startDate: { type: DataTypes.DATE },
      endDate: { type: DataTypes.DATE }
    },
    {
      sequelize,
      modelName: 'Project',
      tableName: 'projects'
    }
  );

  return Project;
};
