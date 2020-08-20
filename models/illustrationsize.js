'use strict';
const {DataTypes, Model} = require('sequelize');
const sequelize = require('../dbal/connectors/sequelize');
const IllustrationType = require('../models/illustrationtype');

class IllustrationSize extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(IllustrationType, {
        foreignKey: 'typeId'
      });
    }
};
IllustrationSize.init({
    typeId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    width: DataTypes.FLOAT,
    height: DataTypes.FLOAT
}, {
    sequelize,
    modelName: 'IllustrationSize',
});

module.exports = IllustrationSize;