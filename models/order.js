'use strict';
const {DataTypes, Model} = require('sequelize');
const sequelize = require('../dbal/connectors/sequelize');
const User = require('./user');
const OrderState = require('./orderstate');
const Illustration = require('./illustration');

class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.belongsTo(User);
        this.belongsTo(OrderState, {
            foreignKey: 'stateId'
        });
        this.belongsTo(Illustration);
    }
};
Order.init({
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    illustrationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    sendDate: DataTypes.DATE
}, {
    sequelize,
    modelName: 'Order',
});

module.exports = Order;