module.exports = (sequelize, DataTypes) => {
    const Discounts = sequelize.define('Discounts', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        percent: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        amount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: true,
        },
        reason: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    });

    Discounts.associate = function(models) {
        Discounts.belongsTo(models.Students, { 
            foreignKey: 'student_id', 
            as: 'student' 
        });
    };

    return Discounts;
}