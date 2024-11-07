// src/controllers/bankingReportController.js
const BankingReport = require('../models/BankingReport');
const apiService = require('../services/apiService');

const bankingReportController = {
    createReport: async (req, res) => {
        try {
            const { account_name, account_number, bank_name, description } = req.body;
            
            
            const report = await BankingReport.create({
                account_name,
                account_number,
                bank_name,
                description
            });

            res.status(201).json({
                success: true,
                message: 'Report submitted successfully',
                data: report
            });
        } catch (error) {
            console.error('Error creating report:', error);
            res.status(500).json({
                success: false,
                message: 'Error submitting report',
                error: error.message
            });
        }
    },

    validateReport: async (req, res) => {
        try {
            const { account_name, account_number, bank_name } = req.body;
    
            const report = await BankingReport.findOne({
                where: {
                    account_name,
                    account_number,
                    bank_name
                }
            });
    
            if (report) {
                return res.json({
                    success: true,
                    status: 'valid',  // Adding a status field for clarity
                    message: 'Report found',
                    data: report
                });
            } else {
                return res.status(404).json({
                    success: false,
                    status: 'not_found',  // Consistent status field
                    message: 'Report not found'
                });
            }
        } catch (error) {
            console.error('Error validating report:', error);
            res.status(500).json({
                success: false,
                status: 'error',
                message: 'Error validating report',
                error: error.message
            });
        }
    }
};

module.exports = bankingReportController;