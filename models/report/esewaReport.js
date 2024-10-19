const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Report = require('./report');

const EsewaReport = sequelize.define('EsewaReport', {
    esewa_id: {
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
    esewa_number: {
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

module.exports = EsewaReport;