'use strict';
const {DataTypes, Model} = require('sequelize');
const sequelize = require('../dbal/connectors/sequelize');

class Email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
    }
}
Email.init({
    from: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    to: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    subject: DataTypes.STRING,
    text: DataTypes.TEXT,
    params: DataTypes.JSON,
    isSent: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    }
}, {
    sequelize,
    modelName: 'Email',
});

module.exports = Email;