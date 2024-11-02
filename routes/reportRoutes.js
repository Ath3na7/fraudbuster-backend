const express = require('express');
const router = express.Router();

// Import all type-specific routes
const bankingRoutes = require('./bankingRoutes');
const esewaRoutes = require('./esewaRoutes');
const phoneRoutes = require('./phoneRoutes');
const socialMediaRoutes = require('./socialMediaRoutes');
const telegramRoutes = require('./telegramRoutes');
const whatsappRoutes = require('./whatsappRoutes');

// Use routes with respective base paths
router.use('/banking', bankingRoutes);
router.use('/esewa', esewaRoutes);
router.use('/phone', phoneRoutes);
router.use('/social-media', socialMediaRoutes);
router.use('/telegram', telegramRoutes);
router.use('/whatsapp', whatsappRoutes);

module.exports = router;