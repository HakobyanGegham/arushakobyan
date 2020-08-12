const config = require('../config/configs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

class AuthService {
    generateToken(email) {
        return jwt.sign({email}, config.jwt.secretToken, { expiresIn: '59m' });
    }

    async login(params) {
        const admin = await Admin.findOne({
            where: {
                username: params.username,
                password: params.password
            }
        });

        if (!admin) {
            throw new Error('User not found');
        }

        return this.generateToken(admin.email);
    }
}

const authService = new AuthService();

module.exports = authService;