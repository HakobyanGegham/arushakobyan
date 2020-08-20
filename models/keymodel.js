const {DataTypes, Model, Op} = require('sequelize');

class KeyModel extends Model {
    static async getIdByKey(key) {
        const item = await this.findOne({
            attributes: ['id'],
            where: {key: key}
        });

        if (item) {
            return item.id;
        }

        return null;
    }
}

module.exports = KeyModel;