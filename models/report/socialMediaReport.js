const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Report = require('./report');

const SocialMediaReport = sequelize.define('SocialMediaReport', {
    social_media_id: {
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
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    URL: {
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

module.exports = SocialMediaReport;