'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      // associations virão depois (Education, Experience, etc.)
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
