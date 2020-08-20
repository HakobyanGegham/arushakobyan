'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('IllustrationStates', [
            {
                key: 'not_started',
                name: 'Not started',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                key: 'finished',
                name: 'Finished',
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
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('IllustrationStates', null, {});
    }
};
