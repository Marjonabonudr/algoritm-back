module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define('Roles', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },  
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    });

    Roles.associate = function(models) {
        Roles.hasMany(models.Users, {
            foreignKey: 'role_id',
            as: 'Users',
        });
    };

    return Roles;
    
}