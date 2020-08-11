'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Payments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            orderId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Orders',
                    key: 'id'
                }
            },
            priceId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Prices',
                    key: 'id'
                }
            },
            stateId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'PaymentStates',
                    key: 'id'
                }
            },
            typeId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'PaymentTypes',
                    key: 'id'
                }
            },
            transactionToken: {
                type: Sequelize.STRING
            },
            paidDate: {
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
        await queryInterface.dropTable('Payments');
    }
};