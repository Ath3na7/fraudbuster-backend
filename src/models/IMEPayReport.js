const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const IMEPayReport = sequelize.define('IMEPayReport', {
    imepay_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    imepay_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    timestamps: false,
});

module.exports = IMEPayReport;