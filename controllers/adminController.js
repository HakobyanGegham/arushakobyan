const illustrationService = require('../services/illustrationService');
const authService = require('../services/authService');
const errorHandler = require('../middleware/errorHandler');
const {body, validationResult} = require('express-validator');

class AdminController {
    getIllustrations(req, res) {
        illustrationService.getAll().then(result => {
            res.json(result);
        }).catch(error => {
            return errorHandler({message: error.message}, 404, res);
        });
    }

    login(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            errorHandler(errors.array(), 422, res);
        } else {
            const params = req.body;
            authService.login(params).then(result => {
                res.json({token: result});
            }).catch(error => {
                return errorHandler({message: error.message}, 404, res);
            });
        }
    }

    validate() {
        return [
            body('username', 'User name is mandatory, please insert user name.').not().isEmpty(),
            body('password', 'Password is mandatory, please insert password.').not().isEmpty(),
        ];
    }
}

const adminController = new AdminController();
module.exports = adminController;
