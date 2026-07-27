module.exports = (sequelize, DataTypes) => {
    const Payments = sequelize.define('Payments', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        finance_account_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        payment_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        paid_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        cashier_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Payments.associate = function(models) {
        // Payments.belongsTo(models.Finance_accounts, { 
        //     foreignKey: 'finance_account_id', 
        //     as: 'financeAccount' 
        // });
        Payments.belongsTo(models.Users, { 
            foreignKey: 'cashier', 
            as: 'cashierUser' 
        });

    };

    return Payments;
}