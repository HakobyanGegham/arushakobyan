const sequelize = require('../dbal/connectors/sequelize');
const Illustration = require("../models/illustration");

class IllustrationService {
    static getAll() {
        return Illustration.findAll();
    }
}

module.exports = IllustrationService;
