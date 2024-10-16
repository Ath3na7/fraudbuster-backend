// controllers/reportController.js

const ScamReport = require('../models/ScamReport');

// Function to submit a scam report
async function submitScamReport(reportData) {
    try {
        // Initialize details object
        let details = {};
        
        // Validate report data based on scamType
        switch (reportData.scamType) {
            case 'banking':
                if (!reportData.details || !reportData.details.bankName || !reportData.details.accountNumber || !reportData.details.accountName) {
                    throw new Error('Bank Name, Account Number, and Account Name are required for banking scams.');
                }
                details.bankDetails = {
                    bankName: reportData.details.bankName,
                    accountNumber: reportData.details.accountNumber,
                    accountName: reportData.details.accountName,
                    description: reportData.details.description || null,
                    images: reportData.details.images || nulls
                };
                break;

            case 'esewa':
                if (!reportData.details || !reportData.details.esewaNumber) {
                    throw new Error('Esewa Number is required for Esewa scams.');
                }
                details.esewaDetails = {
                    esewaNumber: reportData.details.esewaNumber,
                    description: reportData.details.description || null,
                    images: reportData.details.images || null
                };
                break;

            case 'whatsapp':
                if (!reportData.details || !reportData.details.whatsappNumber) {
                    throw new Error('WhatsApp Number is required for WhatsApp scams.');
                }
                details.whatsappDetails = {
                    whatsappNumber: reportData.details.whatsappNumber,
                    description: reportData.details.description || null,
                    images: reportData.details.images || null
                };
                break;

            case 'telegram':
                if (!reportData.details || !reportData.details.telegramUsername) {
                    throw new Error('Telegram Username is required for Telegram scams.');
                }
                details.telegramDetails = {
                    telegramUsername: reportData.details.telegramUsername,
                    description: reportData.details.description || null,
                    images: reportData.details.images || null
                };
                break;

            case 'facebook':
                if (!reportData.details || !reportData.details.facebookName || !reportData.details.facebookUrl) {
                    throw new Error('Facebook Name and URL are required for Facebook scams.');
                }
                details.facebookDetails = {
                    facebookName: reportData.details.facebookName,
                    facebookUrl: reportData.details.facebookUrl,
                    description: reportData.details.description || null,
                    images: reportData.details.images || null
                };
                break;

            case 'phone':
                if (!reportData.details || !reportData.details.phoneNumber) {
                    throw new Error('Phone Number is required for Phone scams.');
                }
                details.phoneDetails = {
                    phoneNumber: reportData.details.phoneNumber,
                    description: reportData.details.description || null,
                    images: reportData.details.images || null
                };
                break;

            default:
                throw new Error('Invalid scam type provided.');
        }

        // Save the report to the database if all validations pass
        const report = await ScamReport.create({ ...reportData, details });
        console.log('Scam report saved successfully!', report);
        return report;
    } catch (error) {
        console.error('Error saving scam report:', error);
        throw error; // Optionally re-throw the error for further handling
    }
}

// Export the function
module.exports = {
    submitScamReport,
};