module.exports = (sequelize, DataTypes) => {
    const StudentTransfer = sequelize.define('StudentTransfer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        old_teacher: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        new_teacher: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reason: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    });

    StudentTransfer.associate = function(models) {
        StudentTransfer.belongsTo(models.Students, { 
            foreignKey: 'student_id', 
            as: 'student' 
        });

        StudentTransfer.belongsTo(models.Teachers, { 
            foreignKey: 'old_teacher', 
            as: 'oldTeacher' 
        });
        
        StudentTransfer.belongsTo(models.Teachers, { 
            foreignKey: 'new_teacher', 
            as: 'newTeacher' 
        });
    };

    return StudentTransfer;

}