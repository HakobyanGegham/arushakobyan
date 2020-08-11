'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Illustrations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            size: {
                type: Sequelize.STRING
            },
            stateId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'IllustrationStates',
                    key: 'id'
                }
            },
            typeId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'IllustrationTypes',
                    key: 'id'
                }
            },
            sendDate: {
                type: Sequelize.DATE
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
        await queryInterface.dropTable('Illustrations');
    }
};