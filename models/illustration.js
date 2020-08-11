'use strict';
const {DataTypes, Model} = require('sequelize');
const sequelize = require('../dbal/connectors/sequelize');
const IllustrationType = require('./illustrationtype');
const IllustrationState = require('./illustrationstate');

class Illustration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.belongsTo(IllustrationType, {
            foreignKey: 'typeId'
        });
        this.belongsTo(IllustrationState, {
            foreignKey: 'stateId'
        });
    }
}
Illustration.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    size: DataTypes.STRING,
    stateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    sendDate: DataTypes.DATE
}, {
    sequelize,
    modelName: 'Illustration',
});
module.exports = Illustration;