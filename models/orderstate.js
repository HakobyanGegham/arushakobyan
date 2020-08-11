'use strict';
const {DataTypes, Model} = require('sequelize');
const sequelize = require('../dbal/connectors/sequelize');
const Order = require('./order');

class OrderState extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.hasMany(Order);
    }
};
OrderState.init({
    key: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: DataTypes.STRING
}, {
    sequelize,
    modelName: 'OrderState',
});
module.exports = OrderState;