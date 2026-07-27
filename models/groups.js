module.exports = (sequelize, DataTypes) => {
    const Groups = sequelize.define('Groups', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        teacher_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        room_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        lesson_duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        monthly_lessons: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
 
    Groups.associate = function(models) {
        Groups.belongsTo(models.Courses, {
            foreignKey: 'course_id',
            as: 'Courses',
        });
        Groups.belongsTo(models.Teachers, {
            foreignKey: 'teacher_id',
            as: 'Teachers',
        });
        Groups.belongsTo(models.Rooms, {
            foreignKey: 'room_id',
            as: 'Rooms',
        });
        Groups.hasMany(models.Schedules, {
            foreignKey: 'group_id',
            as: 'Schedules',
        });
    };

    return Groups;
}