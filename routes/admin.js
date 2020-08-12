const express = require('express');
const adminController = require("../controllers/adminController");
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const priceRouter = require('./prices');

router.post('/login', adminController.login);
router.use(authenticateToken);
router.use(priceRouter);
router.get('/illustrations', adminController.getIllustrations);

module.exports = router;