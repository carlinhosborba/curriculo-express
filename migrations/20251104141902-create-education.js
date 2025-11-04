'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('educations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      personId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'persons', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      school: { type: Sequelize.STRING(180), allowNull: false },
      degree: { type: Sequelize.STRING(120) },
      field: { type: Sequelize.STRING(120) },
      startDate: { type: Sequelize.DATE },
      endDate: { type: Sequelize.DATE },
      description: { type: Sequelize.TEXT },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('educations');
  }
};
