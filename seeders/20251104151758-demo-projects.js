'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('projects', [
      {
        personId: 1,
        name: 'Portfolio Pessoal',
        description: 'Site de portfólio com Next.js e Tailwind.',
        url: 'https://portfolio-carlos-borba.vercel.app',
        repoUrl: 'https://github.com/carlinhosborba/portfolio-carlos-borba',
        startDate: new Date('2024-03-01'),
        endDate: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        personId: 1,
        name: 'Currículo Express API',
        description: 'API REST com Express + Sequelize + Neon (Postgres).',
        url: null,
        repoUrl: 'https://github.com/carlinhosborba/curriculo-express',
        startDate: new Date('2025-11-01'),
        endDate: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        personId: 2,
        name: 'Gestão de Tarefas',
        description: 'API de tarefas com autenticação JWT e testes.',
        url: null,
        repoUrl: 'https://github.com/anasilva/tasks-api',
        startDate: new Date('2023-06-01'),
        endDate: new Date('2024-02-01'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('projects', null, {});
  }
};
