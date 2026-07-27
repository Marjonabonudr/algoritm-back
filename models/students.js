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
        Students.belongsTo(models.Parents, { 
            foreignKey: 'parent_id', 
            as: 'parent' 
        });

        Students.hasMany(models.Attendance, { 
            foreignKey: 'student_id', 
            as: 'attendances' 
        });
        Students.hasMany(models.Call_logs, { 
            foreignKey: 'student_id', 
            as: 'callLogs' 
        });
        Students.hasMany(models.Ratings, { 
            foreignKey: 'student_id', 
            as: 'ratings' 
        });
        Students.hasMany(models.StudentGroups, {
            foreignKey: 'student_id', 
            as: 'studentGroups' 
        });
        Students.hasMany(models.StudentTransfer, { 
            foreignKey: 'student_id', 
            as: 'transfers' 
        });
        Students.hasMany(models.Discounts, { 
            foreignKey: 'student_id', 
            as: 'discounts' 
        });
        Students.hasMany(models.Grants, { 
            foreignKey: 'student_id', 
            as: 'grants' 
        });
        Students.hasMany(models.Finance_accounts, { 
            foreignKey: 'student_id', 
            as: 'financeAccounts' 
        });
    };

    
    return Students;
}