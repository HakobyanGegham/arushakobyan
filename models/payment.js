'use strict';
const {DataTypes, Model} = require('sequelize');
const sequelize = require('../dbal/connectors/sequelize');
const Order = require('./order');
const Price = require('./price');
const State = require('./paymentstate');
const Type = require('./paymenttype');

class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.belongsTo(Order);
        this.belongsTo(Price);
        this.belongsTo(State, {
            foreignKey: 'stateId'
        });
        this.belongsTo(Type, {
            foreignKey: 'typeId'
        });
    }
};
Payment.init({
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    priceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    transactionToken: DataTypes.STRING,
    paidDate: DataTypes.DATE
}, {
    sequelize,
    modelName: 'Payment',
});
module.exports = Payment;