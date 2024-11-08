const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const PhoneNumberReport = sequelize.define('PhoneNumberReport', {
    phonenumber_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    phone_number: {
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

module.exports = PhoneNumberReport;
