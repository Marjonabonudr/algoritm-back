module.exports = (sequelize, DataTypes) => {
    const Attendance = sequelize.define('Attendance', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        lesson_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        late_minutes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        penalty: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        reason: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Attendance.associate = function(models) {
        Attendance.belongsTo(models.Lessons, { 
            foreignKey: 'lesson_id', 
            as: 'lesson' 
        });
        Attendance.belongsTo(models.Students, { 
            foreignKey: 'student_id', 
            as: 'student' 
        });

        Attendance.hasMany(models.Call_logs, { 
            foreignKey: 'attendance_id', 
            as: 'callLogs' 
        });
    };


    return Attendance;
}