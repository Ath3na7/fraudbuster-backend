const express = require('express');

const checkRoutes = require('./checkRoutes');
const reportRoutes = require('./reportRoutes');
const uploadRoutes = require('./uploadRoutes');
const router = express.Router();

// Use the routes with a prefix
router.use('/report', reportRoutes);
router.use('/check', checkRoutes);
router.use('/upload', uploadRoutes);



module.exports = router;