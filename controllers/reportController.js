const ScamReport = require('../models/ScamReport');

// Function to submit a scam report specifically for Esewa
async function submitScamReport(reportData) {
    try {
        if (!reportData.esewaID) {
            throw new Error('Esewa ID is required for Esewa scams.');
        }

        const existingReport = await ScamReport.findOne({ where: { esewaID: reportData.esewaID } });

        if (!existingReport) {
            // Create a new report
            return await ScamReport.create({
                esewaID: reportData.esewaID,
                details: reportData.details || null,
                reportCount: 1,
            });
        } else {
            // Increment report count
            existingReport.reportCount += 1;
            existingReport.details = reportData.details || existingReport.details;
            await existingReport.save();
            return existingReport;
        }
    } catch (error) {
        console.error('Error saving scam report:', error);
        throw error;
    }
}

// Export the function
module.exports = {
    submitScamReport,
};
