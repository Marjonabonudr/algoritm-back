const {Op} = require('sequelize');
const {Ratings} = require('../models');
const validateRatings = require('../validations/ratings.Validation');



exports.createRatings = async (req, res) => {
    const { error } = validateRatings(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const ratings = await Ratings.create(req.body);
        res.status(201).send(ratings);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getRatings = async (req, res) => {
    try {
        const ratings = await Ratings.findAll();

        res.status(200).send(ratings);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getRatingsById = async (req, res) => {
    try {
        const ratings = await Ratings.findByPk(req.params.id);

        if (!ratings) return res.status(404).send('Ratings not found');
        res.status(200).send(ratings);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.updateRatings = async (req, res) => {
    const { error } = validateRatings(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const ratings = await Ratings.findByPk(req.params.id);
        if (!ratings) return res.status(404).send('Ratings not found');
        await ratings.update(req.body);

        res.status(200).send(ratings);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.deleteRatings = async (req, res) => {
    try {
        const ratings = await Ratings.findByPk(req.params.id);
        if (!ratings) return res.status(404).send('Ratings not found');

        const ratingsData = ratings.toJSON();

        await ratings.destroy();
        res.status(200).send(ratingsData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}


exports.searchRatings = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const ratings = await Ratings.findAll({
            where: {
                [Op.or]: [
                    { lesson_id: { [Op.iLike]: `%${query}%` } },
                    { student_id: { [Op.iLike]: `%${query}%` } },
                    { teacher_id: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(ratings);
    } catch (error) {
        res.status(500).send(error.message);
    }
}