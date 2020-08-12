const jwt = require('jsonwebtoken');
const config = require('../config/configs');
const errorHandler = require('./errorHandler');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return errorHandler({message: 'Unauthorized request'}, 401, res);
    }

    jwt.verify(token, config.jwt.secretToken, (error, user) => {
        if (error) {
            return errorHandler({message: error.message}, 403, res);
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;