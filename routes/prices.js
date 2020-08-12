const express = require('express');
const PriceController = require('../controllers/priceController');
const router = express.Router();

router.get('/prices', PriceController.getAll);
router.get('/price/:id', PriceController.get);
router.post('/price', PriceController.validate(),  PriceController.create);
router.put('/price/:id', PriceController.validate(),  PriceController.update);
router.delete('/price/:id', PriceController.delete);

module.exports = router;