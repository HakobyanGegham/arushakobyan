const sequelize = require('../dbal/connectors/sequelize');
const Illustration = require("../models/illustration");

class IllustrationService {
    constructor(props) {
        this.string =  Math.random().toString(36).substring(7);
    }

    getAll() {
        console.log(this.string);
        return Illustration.findAll();
    }
}

const illustrationService = new IllustrationService();

module.exports = illustrationService;
