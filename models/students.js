module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define('Students', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        parent_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    });


    Students.associate = (models) => {
        // Students.belongsTo(models.parents, { 
        //     foreignKey: 'parent_id', 
        //     as: 'parent' 
        // });

        // Students.hasMany(models.attendance, { 
        //     foreignKey: 'student_id', 
        //     as: 'attendances' 
        // });
        // Students.hasMany(models.call_logs, { 
        //     foreignKey: 'student_id', 
        //     as: 'callLogs' 
        // });
        // Students.hasMany(models.ratings, { 
        //     foreignKey: 'student_id', 
        //     as: 'ratings' 
        // });
        // Students.hasMany(models.student_groups, { 
        //     foreignKey: 'student_id', 
        //     as: 'studentGroups' 
        // });
        // Students.hasMany(models.student_transfer, { 
        //     foreignKey: 'student_id', 
        //     as: 'transfers' 
        // });
        // Students.hasMany(models.discounts, { 
        //     foreignKey: 'student_id', 
        //     as: 'discounts' 
        // });
        // Students.hasMany(models.grants, { 
        //     foreignKey: 'student_id', 
        //     as: 'grants' 
        // });
        // Students.hasMany(models.finance_accounts, { 
        //     foreignKey: 'student_id', 
        //     as: 'financeAccounts' 
        // });
    };

    
    return Students;
}