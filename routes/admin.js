const express = require('express');
const AdminController = require("../controllers/adminController");
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const priceRouter = require('./prices');

router.post('/login', AdminController.validate(), AdminController.login);
router.use(authenticateToken);
router.use(priceRouter);
router.get('/illustrations', AdminController.getIllustrations);

module.exports = router;
