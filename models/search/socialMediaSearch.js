const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Search = require('./search');

const SocialMediaSearch = sequelize.define('SocialMediaSearch', {
    social_media_search_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    search_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Search,
            key: 'search_id',
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
}, {
    timestamps: false,
});

module.exports = SocialMediaSearch;