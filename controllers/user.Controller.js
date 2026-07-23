const {Op} = require('sequelize');
const {Users, Roles} = require('../models');
const validateUser = require('../validations/user.Validation');
const validateLogin = require('../validations/login.Validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



exports.loginUser = async (req, res) => {
    const { error } = validateLogin(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const {email, password} = req.body;

        const user = await Users.findOne({
            where: {email},
            include: [
                {model: Roles, as: 'Roles'}
            ]
        })
        if (!user) return res.status(404).send('Email yoki parol notogri');

        const validPassword = await bcrypt.compare(password, user.password_hash);
        if (!validPassword) return res.status(404).send('Email yoki parol notogri');

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.Roles ? user.Roles.name : null
            },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        const userData = user.toJSON();
        delete userData.password_hash;

        res.status(200).send({...userData,token});
    } catch (error) {

        res.status(500).send(error.message);
    }
}


exports.createUser = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const existingUser = await Users.findOne({ where: { email: req.body.email } });
        if (existingUser) return res.status(400).send('Bu email allaqachon royxatdan otgan');

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password_hash, salt);

        const users = await Users.create({
            ...req.body,
            password_hash: hashedPassword,
        });

        const userData = users.toJSON();
        delete userData.password_hash;

        res.status(201).send(userData);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: {exclude: ['password_hash']}
        });

        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.gerUsersById = async (req, res) => {
    try {
        const users = await Users.findByPk(req.params.id,{
            include: [
                {model: Roles, as: 'Roles'}
            ],
            attributes: {exclude: ['password_hash']}
        });

        if (!users) return res.status(404).send('Users not found');
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.updateUsers = async (req, res) => {
    const { error } = (req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const users = await Users.findByPk(req.params.id);
        if (!users) return res.status(404).send('Users not found');

        const updateData = {...req.body};
        if(updateData.password_hash) {
            const salt = await bcrypt.genSalt(10);
            updateData.password_hash = await bcrypt.hash(updateData.password_hash, salt);
            delete updateData.password;
        }
        await users.update(updateData);

        const userData = users.toJSON();
        delete userData.password_hash;

        res.status(200).send(userData);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.deleteUsers = async (req, res) => {
    try {
        const users = await Users.findByPk(req.params.id);
        if (!users) return res.status(404).send('Users not found');

        const usersData = users.toJSON();

        await users.destroy();
        res.status(200).send(usersData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}



exports.searchUsers = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const users = await Users.findAll({
            where: {
                [Op.or]: [
                    { fullname: { [Op.iLike]: `%${query}%` } },
                    { phone: { [Op.iLike]: `%${query}%` } },
                    { email: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
}