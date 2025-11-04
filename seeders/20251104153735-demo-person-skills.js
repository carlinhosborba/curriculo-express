'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('person_skills', [
      // Carlos Borba (id=1)
      { personId: 1, skillId: 1, proficiency: 'Avançado', createdAt: new Date(), updatedAt: new Date() },
      { personId: 1, skillId: 2, proficiency: 'Avançado', createdAt: new Date(), updatedAt: new Date() },
      { personId: 1, skillId: 3, proficiency: 'Intermediário', createdAt: new Date(), updatedAt: new Date() },
      { personId: 1, skillId: 4, proficiency: 'Intermediário', createdAt: new Date(), updatedAt: new Date() },
      { personId: 1, skillId: 5, proficiency: 'Avançado', createdAt: new Date(), updatedAt: new Date() },
      { personId: 1, skillId: 6, proficiency: 'Avançado', createdAt: new Date(), updatedAt: new Date() },
      { personId: 1, skillId: 7, proficiency: 'Avançado', createdAt: new Date(), updatedAt: new Date() },

      // Ana Silva (id=2)
      { personId: 2, skillId: 1, proficiency: 'Avançado', createdAt: new Date(), updatedAt: new Date() },
      { personId: 2, skillId: 2, proficiency: 'Avançado', createdAt: new Date(), updatedAt: new Date() },
      { personId: 2, skillId: 4, proficiency: 'Avançado', createdAt: new Date(), updatedAt: new Date() },
      { personId: 2, skillId: 7, proficiency: 'Intermediário', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('person_skills', null, {});
  }
};
