// models/ScamReport.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Import the sequelize instance

// Define the ScamReport model
const ScamReport = sequelize.define('ScamReport', {
    scamType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: [['esewa', 'phone', 'banking', 'telegram', 'whatsapp', 'facebook']],
                msg: 'Invalid scam type!'
            }
        }
    },
    bankDetails: {
        type: DataTypes.JSON, // JSON to store banking-specific details
        allowNull: true,
    },
    whatsappDetails: {
        type: DataTypes.JSON, // JSON to store WhatsApp-specific details
        allowNull: true,
    },
    telegramDetails: {
        type: DataTypes.JSON, // JSON to store Telegram-specific details
        allowNull: true,
    },
    facebookDetails: {
        type: DataTypes.JSON, // JSON to store Facebook-specific details
        allowNull: true,
    },
    esewaDetails: {
        type: DataTypes.JSON, // JSON to store Esewa-specific details
        allowNull: true,
    },
    phoneDetails: {
        type: DataTypes.JSON, // JSON to store Phone-specific details
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
}, {
    timestamps: true // Automatically create createdAt and updatedAt fields
});

// Export the model
module.exports = ScamReport;