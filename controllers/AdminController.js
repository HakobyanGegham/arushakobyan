const illustrationService = require('../services/IllustrationService');
const authService = require('../services/authService');

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
            res.json(result);
        })
    }
}

const adminController = new AdminController();

module.exports = adminController;