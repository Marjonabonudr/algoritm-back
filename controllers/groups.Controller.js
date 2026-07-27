const {Op} = require('sequelize');
const {Groups, Courses, Teachers, Rooms} = require('../models');
const validateGroups = require('../validations/groups.Validation');


exports.createGroups = async (req, res) => {
    const { error } = validateGroups(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const groups = await Groups.create(req.body);
        res.status(201).send(groups);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getGroups = async (req, res) => {
    try {
        const groups = await Groups.findAll();

        res.status(200).send(groups);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getGroupsById = async (req, res) => {
    try {
        const groups = await Groups.findByPk(req.params.id,{
            include: [
                {model: Courses, as: 'Courses'},
                {model: Teachers, as: 'Teachers'},
                {model: Rooms, as: 'Rooms'}
            ]
        });

        if (!groups) return res.status(404).send('Groups not found');
        res.status(200).send(groups);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.updateGroups = async (req, res) => {
    const { error } = validateGroups(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const groups = await Groups.findByPk(req.params.id);
        if (!groups) return res.status(404).send('Groups not found');
        await groups.update(req.body);

        res.status(200).send(groups);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.deleteGroups = async (req, res) => {
    try {
        const groups = await Groups.findByPk(req.params.id);
        if (!groups) return res.status(404).send('Groups not found');

        const groupsData = groups.toJSON();

        await groups.destroy();
        res.status(200).send(groupsData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}


exports.searchGroups = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const groups = await Groups.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(groups);
    } catch (error) {
        res.status(500).send(error.message);
    }
}