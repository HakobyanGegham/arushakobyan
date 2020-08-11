const config = require('../config/configs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

class AuthService {
    generateToken(email) {
        return jwt.sign(email, config.jwt.secretToken, { expiresIn: '1800s' });
    }

    async login(params) {
        const user = await User.findOne({
            where: {
                username: params.username,
                password: params.password
            }
        });

        if (user) {
            return this.generateToken(user.email);
        }
    }
}

const authService = new AuthService();

module.exports = authService;