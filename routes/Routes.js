const express = require('express');
const {
    createReport,
    getAllReports,
    getReportById,
    updateReportById,
    deleteReportById
} = require('../controllers/reportController');

const validateReportType = require('../middlewares/validateReportType');

const router = express.Router();

// Apply the middleware to all routes that need report type validation
router.post('/:type', validateReportType, createReport);
router.get('/:type', validateReportType, getAllReports);
router.get('/:type/:id', validateReportType, getReportById);
router.put('/:type/:id', validateReportType, updateReportById);
router.delete('/:type/:id', validateReportType, deleteReportById);

module.exports = router;