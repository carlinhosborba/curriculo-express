'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('experiences', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      personId: {
        type: Sequelize.INTEGER, allowNull: false,
        references: { model: 'persons', key: 'id' },
        onUpdate: 'CASCADE', onDelete: 'CASCADE'
      },
      company: { type: Sequelize.STRING(180), allowNull: false },
      role: { type: Sequelize.STRING(160), allowNull: false },
      employmentType: { type: Sequelize.STRING(60) }, // CLT, Freelance, etc.
      startDate: { type: Sequelize.DATE },
      endDate: { type: Sequelize.DATE },
      location: { type: Sequelize.STRING(120) },
      description: { type: Sequelize.TEXT },
      isCurrent: { type: Sequelize.BOOLEAN, defaultValue: false },

      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('experiences');
  }
};
