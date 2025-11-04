'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('educations', [
      {
        personId: 1, // Carlos Borba
        school: 'FACET',
        degree: 'Bacharelado',
        field: 'Direito',
        startDate: new Date('2012-01-01'),
        endDate: new Date('2016-12-31'),
        description: 'Curso de graduação em Direito concluído pela FACET.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        personId: 1, // Carlos Borba
        school: 'UNICAP',
        degree: 'Tecnólogo',
        field: 'Sistemas para Internet',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2026-12-31'),
        description: 'Graduação em andamento na Universidade Católica de Pernambuco (UNICAP).',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        personId: 2, // Ana Silva
        school: 'UFRPE',
        degree: 'Bacharelado',
        field: 'Ciência da Computação',
        startDate: new Date('2015-01-01'),
        endDate: new Date('2019-12-31'),
        description: 'Formação em Ciência da Computação pela Universidade Federal Rural de Pernambuco.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('educations', null, {});
  }
};
