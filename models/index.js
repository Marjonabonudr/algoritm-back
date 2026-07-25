const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Roles = require('./roles')(sequelize, Sequelize.DataTypes)
const Branches = require('./branches')(sequelize, Sequelize.DataTypes)
const Rooms = require('./rooms')(sequelize, Sequelize.DataTypes)
const Users = require('./users')(sequelize, Sequelize.DataTypes)
const Groups = require('./groups')(sequelize, Sequelize.DataTypes)
const Courses = require('./courses')(sequelize, Sequelize.DataTypes)
const Schedules = require('./schedules')(sequelize, Sequelize.DataTypes)
const Students = require('./students')(sequelize, Sequelize.DataTypes)
const Teachers = require('./teachers')(sequelize, Sequelize.DataTypes)
const Attendance = require('./attendance')(sequelize, Sequelize.DataTypes)
const StudentGroups = require('./student_groups')(sequelize, Sequelize.DataTypes)
const StudentTransfer = require('./student_transfer')(sequelize, Sequelize.DataTypes)
const Parents = require('./parents')(sequelize, Sequelize.DataTypes)


Roles.associate(sequelize.models);
Branches.associate(sequelize.models);
Rooms.associate(sequelize.models);
Users.associate(sequelize.models);
Groups.associate(sequelize.models);
Courses.associate(sequelize.models);
Schedules.associate(sequelize.models);
Students.associate(sequelize.models);
Teachers.associate(sequelize.models);
Attendance.associate(sequelize.models);
StudentGroups.associate(sequelize.models);
StudentTransfer.associate(sequelize.models);    
Parents.associate(sequelize.models);



module.exports = {
    sequelize,
    Sequelize,
    Roles,
    Branches,
    Rooms,
    Users,
    Groups,
    Courses,
    Schedules,
    Students,
    Teachers,
    Attendance,
    StudentGroups,
    StudentTransfer,
    Parents
}