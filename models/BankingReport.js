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
        validate: validations.isUrl,
    },
}, {
    timestamps: false,
});