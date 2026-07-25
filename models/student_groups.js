module.exports = (sequelize, DataTypes) => {
    const StudentGroups = sequelize.define('StudentGroups', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        group_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        joined_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        left_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    return StudentGroups;
}