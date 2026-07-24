const {Op} = require('sequelize');
const {Teachers, Users, Branches} = require('../models');
const validateTeachers = require('../validations/teachers.Validation');


exports.createTeachers = async (req, res) => {
    const { error } = validateTeachers(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const teachers = await Teachers.create(req.body);
        res.status(201).send(teachers);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getTeachers = async (req, res) => {
    try {
        const teachers = await Teachers.findAll();

        res.status(200).send(teachers);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getTeachersById = async (req, res) => {
    try {
        const teachers = await Teachers.findByPk(req.params.id);

        if (!teachers) return res.status(404).send('Teachers not found');
        res.status(200).send(teachers);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.updateTeachers = async (req, res) => {
    const { error } = validateTeachers(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const teachers = await Teachers.findByPk(req.params.id);
        if (!teachers) return res.status(404).send('Teachers not found');
        await teachers.update(req.body);

        res.status(200).send(teachers);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.deleteTeachers = async (req, res) => {
    try {
        const teachers = await Teachers.findByPk(req.params.id);
        if (!teachers) return res.status(404).send('Teachers not found');

        const teachersData = teachers.toJSON();

        await teachers.destroy();
        res.status(200).send(teachersData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}


exports.searchTeachers = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const teachers = await Teachers.findAll({
            where: {
                [Op.or]: [
                    { user_id: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(teachers);
    } catch (error) {
        res.status(500).send(error.message);
    }
}