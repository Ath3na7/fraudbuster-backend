const ScamReport = require('../models/ScamReport');

// Function to check if a scam report exists for a given esewaID
async function checkEsewaID(req, res) {
    try {
        const { esewaID } = req.query;

        if (!esewaID) {
            return res.status(400).json({ error: 'Please provide an esewaID.' });
        }

        const reports = await ScamReport.findOne({ where: { esewaID: esewaID } });

        if (!reports) {
            return res.status(404).json({ message: 'No reports found for the provided esewaID.' });
        }

        return res.status(200).json(reports);
    } catch (error) {
        console.error('Error checking esewaID:', error);
        return res.status(500).json({ error: 'An error occurred while checking reports.' });
    }
}

// Export the function
module.exports = {
    checkEsewaID,
};
