const {Op} = require('sequelize');
const {Call_logs} = require('../models');
const validateCall_logs = require('../validations/call_logs.Validation');


exports.createCall_logs = async (req, res) => {
    const { error } = validateCall_logs(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const call_logs = await Call_logs.create(req.body);
        res.status(201).send(call_logs);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getCall_logs = async (req, res) => {
    try {
        const call_logs = await Call_logs.findAll();

        res.status(200).send(call_logs);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getCall_logsById = async (req, res) => {
    try {
        const call_logs = await Call_logs.findByPk(req.params.id,{
            include: [
                {model: Students, as: 'Students'},
                {model: Attendance, as: 'Attendance'},
                {model: Users, as: 'Operator'}
            ]
        });

        if (!call_logs) return res.status(404).send('Call_logs not found');
        res.status(200).send(call_logs);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.updateCall_logs = async (req, res) => {
    const { error } = validateCall_logs(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const call_logs = await Call_logs.findByPk(req.params.id);
        if (!call_logs) return res.status(404).send('Call_logs not found');
        await call_logs.update(req.body);

        res.status(200).send(call_logs);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.deleteCall_logs = async (req, res) => {
    try {
        const call_logs = await Call_logs.findByPk(req.params.id);
        if (!call_logs) return res.status(404).send('Call_logs not found');

        const call_logsData = call_logs.toJSON();

        await call_logs.destroy();
        res.status(200).send(call_logsData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}



exports.searchCall_logs = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const call_logs = await Call_logs.findAll({
            where: {
                [Op.or]: [
                    { student_id: { [Op.iLike]: `%${query}%` } },
                    { attendance_id: { [Op.iLike]: `%${query}%` } },
                    { operator: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(call_logs);
    } catch (error) {
        res.status(500).send(error.message);
    }
}