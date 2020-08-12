const illustrationService = require('../services/illustrationService');
const authService = require('../services/authService');
const errorHandler = require('../middleware/errorHandler');

class AdminController {
    getIllustrations(req, res) {
        illustrationService.getAll().then(result => {
            res.json(result);
        });
        // return res.json('Hey there');
    }

    login(req, res) {
        const params = req.body;
        authService.login(params).then(result => {
            res.json({token: result});
        }).catch(error => {
            return errorHandler({message: error.message}, 404, res);
        })
    }
}
const adminController = new AdminController();
module.exports = adminController;