const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const EsewaReport = sequelize.define('EsewaReport', {
    esewa_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    esewa_number: {
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

module.exports = EsewaReport;
