const {DataTypes, Model} = require('sequelize');
const sequelize = require('../dbal/connectors/sequelize');
const Illustration = require('./illustration');
const KeyModel = require('./keymodel');

class IllustrationState extends KeyModel {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.hasMany(Illustration);
    }
}

IllustrationState.init({
    key: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: DataTypes.STRING
}, {
    sequelize,
    modelName: 'IllustrationState',
});

module.exports = IllustrationState;