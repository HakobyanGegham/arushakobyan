const express = require('express');
const router = express.Router();
const adminRoutes = require('../routes/admin');
const illustrationRoutes = require('../routes/illustration');
const userRoutes = require('../routes/user');

router.use('/admin', adminRoutes);
router.use('/illustration', illustrationRoutes);
router.use('/user', userRoutes);

module.exports = router;
