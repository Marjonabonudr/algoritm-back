const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Roles = require('./roles')(sequelize, Sequelize.DataTypes)
const Branches = require('./branches')(sequelize, Sequelize.DataTypes)
const Rooms = require('./rooms')(sequelize, Sequelize.DataTypes)
const Users = require('./users')(sequelize, Sequelize.DataTypes)
const Groups = require('./groups')(sequelize, Sequelize.DataTypes)


Roles.associate(sequelize.models);
Branches.associate(sequelize.models);
Rooms.associate(sequelize.models);
Users.associate(sequelize.models);
Groups.associate(sequelize.models);



module.exports = {
    sequelize,
    Sequelize,
    Roles,
    Branches,
    Rooms,
    Users,
    Groups,
}