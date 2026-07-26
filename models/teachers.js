module.exports = (sequelize, DataTypes) => {
    const Teachers = sequelize.define('Teachers', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        branch_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        salary_per_student: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: true,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    });

    
    Teachers.associate = function(models) {

        Teachers.belongsTo(models.Users, { 
            foreignKey: 'user_id', 
            as: 'user' 
        });
        Teachers.belongsTo(models.Branches, { 
            foreignKey: 'branch_id', 
            as: 'branch' 
        });


        // Teachers.hasMany(models.StudentTransfer, { 
        //     foreignKey: 'old_teacher', 
        //     as: 'oldTransfers' 
        // });
        // Teachers.hasMany(models.StudentTransfer, { 
        //     foreignKey: 'new_teacher', 
        //     as: 'newTransfers' 
        // });
        
        // Teachers.hasMany(models.Ratings, { 
        //     foreignKey: 'teacher_id', 
        //     as: 'ratings' 
        // });
        Teachers.hasMany(models.Groups, { 
            foreignKey: 'teacher_id', 
            as: 'groups' 
        });
    };

    return Teachers;
}