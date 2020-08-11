const express = require('express');
const adminController = require("../controllers/AdminController");
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');

router.post('/login', adminController.login);
router.use(authenticateToken);
router.get('/illustrations', adminController.getIllustrations);

module.exports = router;