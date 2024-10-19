const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Search = require('./search');

const EsewaSearch = sequelize.define('EsewaSearch', {
    esewa_search_id: {
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
    esewa_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

module.exports = EsewaSearch;