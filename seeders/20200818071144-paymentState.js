'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('PaymentStates', [
            {
                key: 'open',
                name: 'Open',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                key: 'completely_paid',
                name: 'Completely paid',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                key: 'partially_paid',
                name: 'Partially paid',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('PaymentStates', null, {});
    }
};