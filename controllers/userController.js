const {body, validationResult} = require('express-validator');
const errorHandler = require('../middleware/errorHandler');
const UserService = require('../services/userService');

class UserController {
    create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            errorHandler(errors.array(), 422, res);
        } else {
            UserService.create(req.body).then(price => {
                return res.json(price);
            }).catch(error => {
                errorHandler({message: error.message}, 500, res);
            });
        }
    }

    validate() {
        return [
            body('email', 'Please insert valid email').not().isEmpty().isEmail(),
            body('firstName', 'First name is mandatory, please insert first name.').not().isEmpty(),
            body('lastName', 'Last name is mandatory, please insert last name.').not().isEmpty(),
            body('phoneNumber', 'Phone number is mandatory, please insert phone number.').not().isEmpty(),
        ];
    }
}
const userController = new UserController();
module.exports = userController;