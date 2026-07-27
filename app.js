const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./config/database');
const setupSwagger = require('./swagger/swagger');


const Roles = require('./routes/roles.Route');
const Branches = require('./routes/branches.Route');
const Rooms = require('./routes/rooms.Route');
const Users = require('./routes/user.Route');
const Groups = require('./routes/groups.Route');
const Courses = require('./routes/courses.Route');
const Schedules = require('./routes/schedules.Route');
const Students = require('./routes/students.Route');
const Teachers = require('./routes/teachers.Route');
const Attendance = require('./routes/attendance.Route');
const StudentGroups = require('./routes/student_groups.Route');
const StudentTransfer = require('./routes/student_transfer.Route');
const Parents = require('./routes/parents.Route');
const Call_logs = require('./routes/call_logs.Route');
const Ratings = require('./routes/ratings.Route');
const Payments = require('./routes/payments.Route');
const Lessons = require('./routes/lesson.Route');
const Discounts = require('./routes/discount.Route');
const Grants = require('./routes/grants.Route');
const Finance_accounts = require('./routes/finance_accounts.Route');


dotenv.config();

const app = express();

app.use(express.json());
app.use(
    cors({ 
        origin: "*"
    })
);



app.use('/api', Roles);
app.use('/api', Branches);
app.use('/api', Rooms);
app.use('/api', Users);
app.use('/api', Groups);
app.use('/api', Courses);
app.use('/api', Schedules);
app.use('/api', Students);
app.use('/api', Teachers);
app.use('/api', Attendance);
app.use('/api', StudentGroups);
app.use('/api', StudentTransfer);
app.use('/api', Parents);
app.use('/api', Call_logs);
app.use('/api', Ratings);
app.use('/api', Payments);
app.use('/api', Lessons);
app.use('/api', Discounts);
app.use('/api', Grants);
app.use('/api', Finance_accounts);



setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })

    .catch((err) => console.error(" DB xatosi", err));


