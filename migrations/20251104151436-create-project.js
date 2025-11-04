'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projects', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      personId: {
        type: Sequelize.INTEGER, allowNull: false,
        references: { model: 'persons', key: 'id' },
        onUpdate: 'CASCADE', onDelete: 'CASCADE'
      },
      name: { type: Sequelize.STRING(180), allowNull: false },
      description: { type: Sequelize.TEXT },
      url: { type: Sequelize.STRING(255) },
      repoUrl: { type: Sequelize.STRING(255) },
      startDate: { type: Sequelize.DATE },
      endDate: { type: Sequelize.DATE },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('projects');
  }
};
