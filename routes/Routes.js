const express = require('express');

const checkRoutes = require('./checkRoutes');
const reportRoutes = require('./reportRoutes');
const router = express.Router();

// Use the routes with a prefix
router.use('/report', reportRoutes);
router.use('/check', checkRoutes);

module.exports = router;