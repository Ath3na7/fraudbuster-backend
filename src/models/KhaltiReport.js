const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const KhaltiReport = sequelize.define('KhaltiReport', {
    khalti_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    khalti_number: {
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

module.exports = KhaltiReport;