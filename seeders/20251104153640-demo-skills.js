'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('skills', [
      { name: 'JavaScript', category: 'Linguagem', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Node.js', category: 'Backend', createdAt: new Date(), updatedAt: new Date() },
      { name: 'React', category: 'Frontend', createdAt: new Date(), updatedAt: new Date() },
      { name: 'PostgreSQL', category: 'Banco de Dados', createdAt: new Date(), updatedAt: new Date() },
      { name: 'HTML', category: 'Frontend', createdAt: new Date(), updatedAt: new Date() },
      { name: 'CSS', category: 'Frontend', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Git', category: 'Controle de Versão', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('skills', null, {});
  }
};
