'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('persons', [
      {
        fullName: 'Carlos Borba',
        headline: 'Assessor Técnico na Secretaria de Gestão e Inovação da Prefeitura Municipal da Aliança',
        email: 'carlosborba@example.com',
        phone: '(81) 99999-9999',
        location: 'Pernambuco, Brasil',
        about: 'Desenvolvedor web freelancer apaixonado por criar experiências na web. Formado em Direito e graduando em Sistemas para Internet.',
        website: 'https://portfolio-carlos-borba.vercel.app',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Ana Silva',
        headline: 'Analista de Sistemas Pleno na TechSolutions',
        email: 'ana.silva@example.com',
        phone: '(81) 98888-8888',
        location: 'Recife, PE',
        about: 'Profissional de TI com foco em desenvolvimento backend e integrações RESTful. Apaixonada por boas práticas e código limpo.',
        website: 'https://anasilva.dev',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('persons', null, {});
  }
};
