const config = require('../../config/configs');
const Sequelize = require('sequelize');
const {database} = config;

const sequelize = new Sequelize(database.name, database.user, database.password, {
    host: database.host,
    dialect: database.dialect,
    repositoryMode: true
});

module.exports = sequelize;