const express = require('express');
const router = express.Router();
const { submitScamReport } = require('../controllers/reportController');

router.post('/submit', async (req, res) => {
    try {
        const report = await submitScamReport(req.body);
        res.status(201).json(report);
    } catch (error) {
        res.status(500).json({ message: 'Error saving report', error: error.message });
    }
});

module.exports = router;
