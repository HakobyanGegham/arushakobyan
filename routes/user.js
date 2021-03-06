const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();

router.post('/', UserController.validate(),  UserController.create);

module.exports = router;