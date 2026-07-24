const {Op} = require('sequelize');
const {Students} = require('../models');
const validateStudents = require('../validations/students.Validation');



exports.createStudents = async (req, res) => {
    const { error } = validateStudents(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const students = await Students.create(req.body);
        res.status(201).send(students);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getStudents = async (req, res) => {
    try {
        const students = await Students.findAll();

        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getStudentsById = async (req, res) => {
    try {
        const students = await Students.findByPk(req.params.id);

        if (!students) return res.status(404).send('Students not found');
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.updateStudents = async (req, res) => {
    const { error } = validateStudents(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const students = await Students.findByPk(req.params.id);
        if (!students) return res.status(404).send('Students not found');
        await students.update(req.body);

        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.deleteStudents = async (req, res) => {
    try {
        const students = await Students.findByPk(req.params.id);
        if (!students) return res.status(404).send('Students not found');

        const studentsData = students.toJSON();

        await students.destroy();
        res.status(200).send(studentsData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}



exports.searchStudents = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const students = await Students.findAll({
            where: {
                [Op.or]: [
                    { fullname: { [Op.iLike]: `%${query}%` } }, 
                    { birthday: { [Op.iLike]: `%${query}%` } },
                    { phone: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error.message);
    }
}