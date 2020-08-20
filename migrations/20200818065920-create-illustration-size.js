'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('IllustrationSizes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            typeId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'IllustrationTypes',
                    key: 'id'
                }
            },
            width: {
                type: Sequelize.FLOAT
            },
            height: {
                type: Sequelize.FLOAT
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
        await queryInterface.dropTable('IllustrationSizes');
    }
};