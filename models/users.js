module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    });

    Users.associate = function(models) {
        Users.belongsTo(models.Roles, {
            foreignKey: 'role_id',
            as: 'Roles',
        });
        // Users.hasMany(models.Call_logs, {
        //     foreignKey: 'user_id',
        //     as: 'Call_logs',
        // });
        // Users.hasMany(models.Payments, {
        //     foreignKey: 'cashier',
        //     as: 'Payments',
        // });
        // Users.hasMany(models.Teachers, {
        //     foreignKey: 'user_id',
        //     as: 'Teachers',
        // });
    };

    return Users;
}