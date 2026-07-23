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



setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })

    .catch((err) => console.error(" DB xatosi", err));


