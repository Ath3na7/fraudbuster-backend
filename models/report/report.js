
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

// Base Report Model
// const { Report, BankingReport, EsewaReport } = require('./path/to/Report');
const Report = sequelize.define('Report', {
    scam_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    scam_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
}, {
    timestamps: false,
});

// Banking Report Model
const BankingReport = sequelize.define('BankingReport', {
    bank_id: {
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
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true,
        },
    },
}, {
    timestamps: false,
});

// Esewa Report Model
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
        onDelete: 'CASCADE',
    },
    esewa_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true,
        },
    },
}, {
    timestamps: false,
});

// Phone Report Model
const PhoneReport = sequelize.define('PhoneReport', {
    phone_id: {
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
        onDelete: 'CASCADE',
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: true,
        },
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true,
        },
    },
}, {
    timestamps: false,
});

// Social Media Report Model
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
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true,
        },
    },
}, {
    timestamps: false,
});

// Telegram Report Model
const TelegramReport = sequelize.define('TelegramReport', {
    telegram_id: {
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
        onDelete: 'CASCADE',
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: true,
        },
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true,
        },
    },
}, {
    timestamps: false,
});

// WhatsApp Report Model
const WhatsAppReport = sequelize.define('WhatsAppReport', {
    whatsapp_id: {
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
        onDelete: 'CASCADE',
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: true,
        },
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true,
        },
    },
}, {
    timestamps: false,
});

// Associations
Report.hasMany(BankingReport, { foreignKey: 'scam_id', onDelete: 'CASCADE' });
BankingReport.belongsTo(Report, { foreignKey: 'scam_id' });

Report.hasMany(EsewaReport, { foreignKey: 'scam_id', onDelete: 'CASCADE' });
EsewaReport.belongsTo(Report, { foreignKey: 'scam_id' });

Report.hasMany(PhoneReport, { foreignKey: 'scam_id', onDelete: 'CASCADE' });
PhoneReport.belongsTo(Report, { foreignKey: 'scam_id' });

Report.hasMany(SocialMediaReport, { foreignKey: 'scam_id', onDelete: 'CASCADE' });
SocialMediaReport.belongsTo(Report, { foreignKey: 'scam_id' });

Report.hasMany(TelegramReport, { foreignKey: 'scam_id', onDelete: 'CASCADE' });
TelegramReport.belongsTo(Report, { foreignKey: 'scam_id' });

Report.hasMany(WhatsAppReport, { foreignKey: 'scam_id', onDelete: 'CASCADE' });
WhatsAppReport.belongsTo(Report, { foreignKey: 'scam_id' });


// Export all models in one object
module.exports = {
    Report,
    BankingReport,
    EsewaReport,
    PhoneReport,
    SocialMediaReport,
    TelegramReport,
    WhatsAppReport,
};