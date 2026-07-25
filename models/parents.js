module.exports = (sequelize, DataTypes) => {
    const Parents = sequelize.define('Parents', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        relation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telegram: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    });

    Parents.associate = function(models) {
        Parents.hasMany(models.Students, {
            foreignKey: 'parent_id',
            as: 'Students',
        });
    };

    return Parents;
}