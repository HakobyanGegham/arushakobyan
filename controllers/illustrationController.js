const {body, validationResult} = require('express-validator');
const errorHandler = require('../middleware/errorHandler');
const IllustrationService = require('../services/illustrationService');

class IllustrationController {
    create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            errorHandler(errors.array(), 422, res);
        } else {
            IllustrationService.create(req.body).then(price => {
                return res.json(price);
            }).catch(error => {
                errorHandler({message: error.message}, 500, res);
            });
        }
    }

    validate() {
        return [
            body('size', 'Size is mandatory, please insert size.').not().isEmpty(),
            body('name', 'Name is mandatory, please insert name.').not().isEmpty(),
            body('illustrationTypeId', 'Illustration type id should be numeric.').isInt(),
            body('userId', 'User id should be numeric.').isInt().not().isEmpty(),
        ];
    }
}
const illustrationController = new IllustrationController();
module.exports = illustrationController;