const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Search = require('./search');

const TelegramSearch = sequelize.define('TelegramSearch', {
    telegram_search_id: {
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
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = TelegramSearch;