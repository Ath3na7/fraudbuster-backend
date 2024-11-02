// models/index.js
const Report = require('./report');
const BankingReport = require('./BankingReport');
const EsewaReport = require('./EsewaReport');
const PhoneReport = require('./PhoneReport');
const SocialMediaReport = require('./SocialMediaReport');
const TelegramReport = require('./TelegramReport');
const WhatsAppReport = require('./WhatsappReport');

// Define associations
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

module.exports = {
    Report,
    BankingReport,
    EsewaReport,
    PhoneReport,
    SocialMediaReport,
    TelegramReport,
    WhatsAppReport,
};