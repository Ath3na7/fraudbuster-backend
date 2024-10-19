const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Report = require('./report');

const TelegramReport = sequelize.define('TelegramReport', {
    telegram_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    scam_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Report,
            key: 'scam_id',
        },
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: false,
});

module.exports = TelegramReport;