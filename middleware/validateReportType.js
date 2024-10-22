const validScamTypes = [
    'bankingreport',
    'esewareport',
    'phonereport',
    'socialmediareport',
    'telegramreport',
    'whatsappreport',
];

const validateScamType = (req, res, next) => {
    const scamType = req.body.scam_type?.toLowerCase(); // Extract and normalize scam_type from request body

    if (!scamType) {
        return res.status(400).json({ error: 'scam_type is required' });
    }

    if (!validScamTypes.includes(scamType)) {
        return res.status(400).json({ error: 'Invalid scam_type' });
    }

    next(); // Call the next middleware or route handler
};

module.exports = validateScamType;