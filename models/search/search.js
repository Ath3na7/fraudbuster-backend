const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Search = sequelize.define('Search', {
    search_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    search_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    search_date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
}, {
    timestamps: false,
});

module.exports = Search;