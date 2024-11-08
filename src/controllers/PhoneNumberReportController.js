// src/controllers/esewaReportController.js
const PhoneNumberReport = require('../models/PhoneNumberReport');
const apiService = require('../services/apiService');

const phoneNumberReportController = {
    createReport: async (req, res) => {
        try {
            const { phone_number, description } = req.body;
            
            // Creating a new Esewa report
            const report = await PhoneNumberReport.create({
                phone_number,
                description
            });

            res.status(201).json({
                success: true,
                message: 'Phone report submitted successfully',
                data: report
            });
        } catch (error) {
            console.error('Error creating Phone Number report:', error);
            res.status(500).json({
                success: false,
                message: 'Error submitting Phone Number report',
                error: error.message
            });
        }
    },

    validateReport: async (req, res) => {
        try {
            const { phone_number } = req.body;
    
            // Finding an existing report with the given Esewa number
            const report = await PhoneNumberReport.findOne({
                where: {
                    phone_number
                }
            });
    
            if (report) {
                return res.json({
                    success: true,
                    status: 'valid',
                    message: 'Phone report found',
                    data: report
                });
            } else {
                return res.status(404).json({
                    success: false,
                    status: 'not_found',
                    message: 'Phone report not found'
                });
            }
        } catch (error) {
            console.error('Error validating Phone report:', error);
            res.status(500).json({
                success: false,
                status: 'error',
                message: 'Error validating Phone report',
                error: error.message
            });
        }
    }
};

module.exports = phoneNumberReportController;
