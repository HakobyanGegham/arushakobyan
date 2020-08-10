const express = require('express');
const AdminController = require("../controllers/AdminController");
const router = express.Router();

router.get('/illustrations', AdminController.getIllustrations);

module.exports = router;