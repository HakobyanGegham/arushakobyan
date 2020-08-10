'use strict';
const {DataTypes, Model} = require('sequelize');
const sequelize = require('../dbal/connectors/sequelize');

class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
    }
}

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 2,
            isAlpha: true
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 2,
            isAlpha: true
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    }
}, {
    sequelize,
    modelName: 'User'
});

module.exports = User;