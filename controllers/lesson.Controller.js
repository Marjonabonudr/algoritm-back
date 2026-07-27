const {Op} = require('sequelize');
const {Lessons, Groups} = require('../models');
const validateLessons = require('../validations/lesson.Validation');


exports.createLessons = async (req, res) => {
    const { error } = validateLessons(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const lessons = await Lessons.create(req.body);
        res.status(201).send(lessons);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getLessons = async (req, res) => {
    try {
        const lessons = await Lessons.findAll();

        res.status(200).send(lessons);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getLessonsById = async (req, res) => {
    try {
        const lessons = await Lessons.findByPk(req.params.id,{
            include: [
                {model: Students, as: 'Students'},
                {model: Attendance, as: 'Attendance'},
                {model: Users, as: 'Operator'}
            ]
        });

        if (!lessons) return res.status(404).send('Lessons not found');
        res.status(200).send(lessons);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.updateLessons = async (req, res) => {
    const { error } = validateLessons(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const lessons = await Lessons.findByPk(req.params.id);
        if (!lessons) return res.status(404).send('Lessons not found');
        await lessons.update(req.body);

        res.status(200).send(lessons);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.deleteLessons = async (req, res) => {
    try {
        const lessons = await Lessons.findByPk(req.params.id);
        if (!lessons) return res.status(404).send('Lessons not found');

        const lessonsData = lessons.toJSON();

        await lessons.destroy();
        res.status(200).send(lessonsData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}


exports.searchLessons = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const lessons = await Lessons.findAll({
            where: {
                [Op.or]: [
                    { group_id: { [Op.iLike]: `%${query}%` } },
                    { lesson_date: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(lessons);
    } catch (error) {
        res.status(500).send(error.message);
    }
}