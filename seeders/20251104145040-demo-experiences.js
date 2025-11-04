'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('experiences', [
      {
        personId: 1,
        company: 'Prefeitura Municipal da Aliança',
        role: 'Assessor Técnico',
        employmentType: 'CLT',
        startDate: new Date('2023-01-01'),
        endDate: null,
        location: 'Pernambuco, Brasil',
        description: 'Atuação em gestão e inovação; apoio a projetos e processos.',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        personId: 2,
        company: 'TechSolutions',
        role: 'Analista de Sistemas Pleno',
        employmentType: 'CLT',
        startDate: new Date('2021-03-01'),
        endDate: null,
        location: 'Recife, PE',
        description: 'Desenvolvimento de APIs RESTful e integrações.',
        isCurrent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('experiences', null, {});
  }
};
