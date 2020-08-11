'use strict';
const {DataTypes, Model} = require('sequelize');
const sequelize = require('../dbal/connectors/sequelize');
const IllustrationType = require('./illustrationtype');

class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.belongsTo(IllustrationType);
    }
}

Price.init({
    illustrationTypeId: DataTypes.INTEGER,
    interval: DataTypes.STRING,
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Price',
});

module.exports = Price;