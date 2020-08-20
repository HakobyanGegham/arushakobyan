'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrderStates', [
      {
        key: 'not_sent',
        name: 'Not sent',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        key: 'sent',
        name: 'Sent',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrderStates', null, {});
  }
};
