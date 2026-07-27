module.exports = (sequelize, DataTypes) => {
    const Ratings = sequelize.define('Ratings', {
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
        teacher_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
 
    Ratings.associate = function(models) {
        // Ratings.belongsTo(models.Lessons, { 
        //     foreignKey: 'lesson_id', 
        //     as: 'lesson' 
        // });
        Ratings.belongsTo(models.Students, { 
            foreignKey: 'student_id', 
            as: 'student' 
        });
        Ratings.belongsTo(models.Teachers, { 
            foreignKey: 'teacher_id', 
            as: 'teacher' 
        });
    };

    return Ratings;
}