const {DataTypes, Model} = require('sequelize');

class KeyModel extends Model {
    getByKey(key) {
        return this.findOne({
            where: {
                key: key
            }
        });
    }
}

module.exports = KeyModel;