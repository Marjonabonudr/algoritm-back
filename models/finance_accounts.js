module.exports = (sequelize, DataTypes) => {
    const Finance_accounts = sequelize.define('Finance_accounts', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        balance: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        debt: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        advanced_payment: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: true,
        },
        due_day: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Finance_accounts.associate = function(models) {
        Finance_accounts.belongsTo(models.Students, { 
            foreignKey: 'student_id', 
            as: 'student' 
        });

        Finance_accounts.hasMany(models.Payments, { 
            foreignKey: 'finance_account_id', 
            as: 'payments' 
        });
    };

    return Finance_accounts;
}