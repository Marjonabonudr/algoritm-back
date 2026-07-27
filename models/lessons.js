module.exports = (sequelize, DataTypes) => {
    const Lessons = sequelize.define('Lessons', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        group_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        lesson_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        started_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        ended_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    
    Lessons.associate = function(models) {
        Lessons.belongsTo(models.Groups, { 
            foreignKey: 'group_id', 
            as: 'group' 
        });

        Lessons.hasMany(models.Ratings, { 
            foreignKey: 'lesson_id', 
            as: 'ratings' 
        });
        
        Lessons.hasMany(models.Attendance, { 
            foreignKey: 'lesson_id', 
            as: 'attendances' 
        });
    };

    return Lessons;
}