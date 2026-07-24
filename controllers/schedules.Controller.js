const {Op} = require('sequelize');
const {Schedules, Groups} = require('../models');
const validateSchedules = require('../validations/schedules.Validation');


exports.createSchedules = async (req, res) => {
    const { error } = validateSchedules(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const schedules = await Schedules.create(req.body);
        res.status(201).send(schedules);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getSchedules = async (req, res) => {
    try {
        const schedules = await Schedules.findAll();

        res.status(200).send(schedules);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getSchedulesById = async (req, res) => {
    try {
        const schedules = await Schedules.findByPk(req.params.id,{
            include: [
                {model: Groups, as: 'Groups'}
            ]
        });

        if (!schedules) return res.status(404).send('Schedules not found');
        res.status(200).send(schedules);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.updateSchedules = async (req, res) => {
    const { error } = validateSchedules(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const schedules = await Schedules.findByPk(req.params.id);
        if (!schedules) return res.status(404).send('Schedules not found');
        await schedules.update(req.body);

        res.status(200).send(schedules);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.deleteSchedules = async (req, res) => {
    try {
        const schedules = await Schedules.findByPk(req.params.id);
        if (!schedules) return res.status(404).send('Schedules not found');

        const schedulesData = schedules.toJSON();

        await schedules.destroy();
        res.status(200).send(schedulesData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}



exports.searchSchedules = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const schedules = await Schedules.findAll({
            where: {
                [Op.or]: [
                    { group_id: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(schedules);
    } catch (error) {
        res.status(500).send(error.message);
    }
}