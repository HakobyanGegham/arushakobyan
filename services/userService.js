const User = require("../models/user");
const emitter = require('../events/EventEmitter');

class UserService {
    getAll() {
        return User.findAll();
    }

    async create(params) {
        try {
            const user = await User.create({
                email: params.email,
                firstName: params.firstName,
                lastName: params.lastName,
                phoneNumber: params.phoneNumber,
            });
            emitter.emit('userCreated', user);
            return user;
        } catch (error) {
            throw error;
        }
    }
}

const userService = new UserService();
module.exports = userService;
