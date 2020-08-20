const express = require('express');
const IllustrationController = require('../controllers/illustrationController');
const router = express.Router();

router.post('/', IllustrationController.validate(),  IllustrationController.create);

module.exports = router;