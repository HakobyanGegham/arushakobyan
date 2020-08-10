'use strict';
const {DataTypes, Model} = require('sequelize');
const sequelize = require('../dbal/connectors/sequelize');

class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
    }
};
Role.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 2,
            isAlpha: true
        }
    },
    accessLevel: {
        type: DataTypes.INTEGER,
    },
}, {
    sequelize,
    modelName: 'Role'
});

module.exports = Role;