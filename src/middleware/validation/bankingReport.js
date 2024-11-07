// src/middleware/validation.js
const validateReport = (req, res, next) => {
    const { account_name, account_number, bank_name } = req.body;
    
    if (!account_name || !account_number || !bank_name) {
        return res.status(400).json({
            success: false,
            message: 'Missing required fields',
            requiredFields: ['account_name', 'account_number', 'bank_name']
        });
    }
    
    next();
};

module.exports = { validateReport };