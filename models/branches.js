module.exports = (sequelize, DataTypes) => {
    const Branches = sequelize.define('Branches', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    });
 
    Branches.associate = function(models) {
        Branches.hasMany(models.Rooms, {
            foreignKey: 'branch_id',
            as: 'Rooms',
        });
        // Branches.hasMany(models.Teachers, {
        //     foreignKey: 'branch_id',
        //     as: 'Teachers',
        // });
    };

    return Branches;
}
