module.exports = (sequelize, DataTypes) => {
    const Call_logs = sequelize.define('Call_logs', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        attendance_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        operator:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        result:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        reason:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        called_at:{
            type: DataTypes.DATE,
            allowNull: false,
        },

    });

    Call_logs.associate = function(models) {
        Call_logs.belongsTo(models.Attendance, {
            foreignKey: 'attendance_id', 
            as: 'attendance' 
        });
        Call_logs.belongsTo(models.Students, { 
            foreignKey: 'student_id', 
            as: 'student' 
        });
        Call_logs.belongsTo(models.Users, { 
            foreignKey: 'user_id', 
        });
    }
    
    return Call_logs;
}