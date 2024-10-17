const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ScamReport = sequelize.define('ReportedEsewaScams', {
    esewaID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    details: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    reportCount: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: true
});

module.exports = ScamReport;
