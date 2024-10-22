const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

// Base Search Model
// const { Search, BankingSearch, EsewaSearch } = require('./path/to/Search');
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

// Banking Search Model
const BankingSearch = sequelize.define('BankingSearch', {
    bank_search_id: {
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
        onDelete: 'CASCADE',
    },
    account_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    account_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bank_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

// Esewa Search Model
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
        onDelete: 'CASCADE',
    },
    esewa_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

// Phone Search Model
const PhoneSearch = sequelize.define('PhoneSearch', {
    phone_search_id: {
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
        onDelete: 'CASCADE',
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

// Social Media Search Model
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
        onDelete: 'CASCADE',
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    URL: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true,
        },
    },
}, {
    timestamps: false,
});

// Telegram Search Model
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
        onDelete: 'CASCADE',
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

// WhatsApp Search Model
const WhatsAppSearch = sequelize.define('WhatsAppSearch', {
    whatsapp_search_id: {
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
        onDelete: 'CASCADE',
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

// Export all models in one object
module.exports = {
    Search,
    BankingSearch,
    EsewaSearch,
    PhoneSearch,
    SocialMediaSearch,
    TelegramSearch,
    WhatsAppSearch,
};