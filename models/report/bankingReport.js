const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Report = require('./report');

const BankingReport = sequelize.define('BankingReport', {
    bank_id: {
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
    account_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    account_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bank_name: {
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

module.exports = BankingReport;