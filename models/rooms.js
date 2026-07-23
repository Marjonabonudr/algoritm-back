module.exports = (sequelize, DataTypes) => {
    const Rooms = sequelize.define('Rooms', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        branch_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
 
    Rooms.associate = function(models) {
        Rooms.belongsTo(models.Branches, {
            foreignKey: 'branch_id',
            as: 'Branches',
        });
        // Rooms.hasMany(models.Groups, {
        //     foreignKey: 'room_id',
        //     as: 'Groups',
        // });
    };

    return Rooms;
}