// src/controllers/imepayReportController.js
const IMEPayReport = require('../models/IMEPayReport'); // Adjusted model import
const apiService = require('../services/apiService');

const imepayReportController = {
    createReport: async (req, res) => {
        try {
            const { imepay_number, description } = req.body;
            
            // Creating a new IMEPay report
            const report = await IMEPayReport.create({
                imepay_number,
                description
            });

            res.status(201).json({
                success: true,
                message: 'IMEPay report submitted successfully',
                data: report
            });
        } catch (error) {
            console.error('Error creating IMEPay report:', error);
            res.status(500).json({
                success: false,
                message: 'Error submitting IMEPay report',
                error: error.message
            });
        }
    },

    validateReport: async (req, res) => {
        try {
            const { imepay_number } = req.body;
    
            // Finding an existing report with the given IMEPay number
            const report = await IMEPayReport.findOne({
                where: {
                    imepay_number
                }
            });
    
            if (report) {
                return res.json({
                    success: true,
                    status: 'valid',
                    message: 'IMEPay report found',
                    data: report
                });
            } else {
                return res.status(404).json({
                    success: false,
                    status: 'not_found',
                    message: 'IMEPay report not found'
                });
            }
        } catch (error) {
            console.error('Error validating IMEPay report:', error);
            res.status(500).json({
                success: false,
                status: 'error',
                message: 'Error validating IMEPay report',
                error: error.message
            });
        }
    }
};

module.exports = imepayReportController;