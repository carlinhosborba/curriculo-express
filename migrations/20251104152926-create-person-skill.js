'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('person_skills', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },

      personId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'persons', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      skillId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'skills', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      proficiency: { type: Sequelize.STRING(30), allowNull: true }, // ex.: Beginner | Intermediate | Advanced

      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });

    // Evita duplicar a mesma skill para a mesma pessoa
    await queryInterface.addConstraint('person_skills', {
      fields: ['personId', 'skillId'],
      type: 'unique',
      name: 'unique_person_skill'
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('person_skills');
  }
};
