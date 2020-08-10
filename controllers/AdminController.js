const IllustrationService = require('../services/IllustrationService');

class AdminController {
    static getIllustrations(req, res) {
        IllustrationService.getAll().then(result => {
            res.json(result);
        });
        // return res.json('Hey there');
    }
}

module.exports = AdminController;