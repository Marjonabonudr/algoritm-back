module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define('Courses', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration_month: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    });
 
    Courses.associate = function(models) {
        Courses.hasMany(models.Groups, {
            foreignKey: 'course_id',
            as: 'Groups',
        });
    };

    return Courses;
}