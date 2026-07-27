module.exports = (sequelize, DataTypes) => {
    const Grants = sequelize.define('Grants', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        percent: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        sponsor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    });

    Grants.associate = function(models) {
        Grants.belongsTo(models.Students, { 
            foreignKey: 'student_id', 
            as: 'student' 
        });
    };

    return Grants;
}