const {Op} = require('sequelize');
const {Courses, Groups} = require('../models');
const validateCourses = require('../validations/courses.Validation');


exports.createCourses = async (req, res) => {
    const { error } = validateCourses(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const courses = await Courses.create(req.body);
        res.status(201).send(courses);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getCourses = async (req, res) => {
    try {
        const courses = await Courses.findAll();

        res.status(200).send(courses);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getCoursesById = async (req, res) => {
    try {
        const courses = await Courses.findByPk(req.params.id);

        if (!courses) return res.status(404).send('Courses not found');
        res.status(200).send(courses);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.updateCourses = async (req, res) => {
    const { error } = validateCourses(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const courses = await Courses.findByPk(req.params.id);
        if (!courses) return res.status(404).send('Courses not found');
        await courses.update(req.body);

        res.status(200).send(courses);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.deleteCourses = async (req, res) => {
    try {
        const courses = await Courses.findByPk(req.params.id);
        if (!courses) return res.status(404).send('Courses not found');

        const coursesData = courses.toJSON();

        await courses.destroy();
        res.status(200).send(coursesData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}


exports.searchCourses = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const courses = await Courses.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(courses);
    } catch (error) {
        res.status(500).send(error.message);
    }
}