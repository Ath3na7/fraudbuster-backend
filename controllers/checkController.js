const ScamReport = require('../models/ScamReport');

// Function to check scam reports based on type and specific details
async function checkScamReports(req, res) {
    try {
        const { scamType, esewaNumber, whatsappNumber, bankAccountNumber } = req.query;

        // Ensure that scamType is provided
        if (!scamType) {
            return res.status(400).json({ error: 'Please provide scamType.' });
        }

        // Construct the query object
        let query = { scamType };

        // Add specific details for different scam types
        switch (scamType) {
            case 'esewa':
                if (!esewaNumber) {
                    return res.status(400).json({ error: 'Please provide an esewaNumber.' });
                }
                query['esewaDetails.esewaNumber'] = esewaNumber; // Use dot notation for nested fields
                break;
            case 'whatsapp':
                if (!whatsappNumber) {
                    return res.status(400).json({ error: 'Please provide a whatsappNumber.' });
                }
                query['whatsappDetails.whatsappNumber'] = whatsappNumber;
                break;
            case 'banking':
                if (!bankAccountNumber) {
                    return res.status(400).json({ error: 'Please provide a bank account number.' });
                }
                query['bankDetails.accountNumber'] = bankAccountNumber;
                break;
            // Add cases for other scam types as needed
            default:
                return res.status(400).json({ error: 'Invalid scam type provided.' });
        }

        // Fetch matching reports from the database
        const reports = await ScamReport.findAll({ where: query });

        if (reports.length === 0) {
            return res.status(404).json({ message: 'No reports found matching the criteria.' });
        }

        // Return the found reports
        return res.status(200).json(reports);
    } catch (error) {
        console.error('Error checking scam reports:', error);
        return res.status(500).json({ error: 'An error occurred while checking reports.' });
    }
}

// Export the function
module.exports = {
    checkScamReports,
};