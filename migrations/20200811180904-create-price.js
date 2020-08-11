'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Prices', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            illustrationTypeId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'IllustrationTypes',
                    key: 'id'
                }
            },
            interval: {
                type: Sequelize.STRING
            },
            amount: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Prices');
    }
};