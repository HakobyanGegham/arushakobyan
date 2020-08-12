const {body, validationResult} = require('express-validator');
const errorHandler = require('../middleware/errorHandler');
const PriceService = require('../services/priceService');

class PriceController {
    getAll(req, res) {
        PriceService.getAll().then(prices => {
            res.json({prices});
        }).catch(error => {
            errorHandler({message: error.message}, 500, res);
        });
    }

    get(req, res) {
        PriceService.get(req.params.id).then(price => {
            if (!price) {
                return errorHandler({message: 'Price not found'}, 404, res);
            }
            res.json(price);
        }).catch(error => {
            return errorHandler({message: error.message}, 500, res);
        });
    }

    create(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            errorHandler(errors.array(), 422, res);
        }

        PriceService.create(req.body).then(price => {
            return res.json(price);
        }).catch(error => {
            errorHandler({message: error.message}, 500, res);
        });
    }

    update(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            errorHandler(errors.array(), 422, res);
        }

        PriceService.update(req.params.id, req.body).then(price => {
            console.log(price);
            return res.json(price);
        }).catch(error => {
            errorHandler({message: error.message}, 500, res);
        });
    }

    delete(req, res) {
        PriceService.delete(req.params.id).then(price => {
            if (!price) {
                return errorHandler({message: 'Price not found'}, 404, res);
            }
            res.json(price);
        }).catch(error => {
            return errorHandler({message: error.message}, 500, res);
        });
    }

    validate() {
        return [
            body('amount', 'Please insert right amount.').isFloat(),
            body('illustrationTypeId', 'Illustration id should be numeric.').optional().isInt(),
            body('interval').optional().isInt()
        ]
    }
}

const priceController = new PriceController();
module.exports = priceController;