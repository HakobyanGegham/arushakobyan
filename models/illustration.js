'use strict';
const {DataTypes, Model} = require('sequelize');
const sequelize = require('../dbal/connectors/sequelize');

class Illustration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
    }
};
Illustration.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 2,
            isAlpha: true
        }
    },
    price: {
        type: DataTypes.FLOAT,
    },
    size: {
        type: DataTypes.STRING,
    }
}, {
    sequelize, // We need to pass the connection instance
    modelName: 'Illustration' // We need to choose the model name
});

module.exports = Illustration;