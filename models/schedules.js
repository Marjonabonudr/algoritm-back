module.exports = (sequelize, DataTypes) => {
    const Schedules = sequelize.define('Schedules', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        group_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        weekday: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        start_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },

    });
 
    Schedules.associate = function(models) {
        Schedules.belongsTo(models.Groups, {
            foreignKey: 'group_id',
            as: 'Groups',
        });
    };

    return Schedules;
}