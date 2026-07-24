const {Op} = require('sequelize');
const {Attendance, Students, Lessons} = require('../models');
const validateAttendance = require('../validations/attendance.Validation');


exports.createAttendance = async (req, res) => {
    const { error } = validateAttendance(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const attendance = await Attendance.create(req.body);
        res.status(201).send(attendance);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findAll();

        res.status(200).send(attendance);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getAttendanceById = async (req, res) => {
    try {
        const attendance = await Attendance.findByPk(req.params.id,{
            include: [
                {model: Students, as: 'Students'},
                {model: Lessons, as: 'Lessons'}
            ]
        });

        if (!attendance) return res.status(404).send('Attendance not found');
        res.status(200).send(attendance);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.updateAttendance = async (req, res) => {
    const { error } = validateAttendance(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const attendance = await Attendance.findByPk(req.params.id);
        if (!attendance) return res.status(404).send('Attendance not found');
        await attendance.update(req.body);

        res.status(200).send(attendance);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.deleteAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findByPk(req.params.id);
        if (!attendance) return res.status(404).send('Attendance not found');

        const attendanceData = attendance.toJSON();

        await attendance.destroy();
        res.status(200).send(attendanceData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}



exports.searchAttendance = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const attendance = await Attendance.findAll({
            where: {
                [Op.or]: [
                    { lesson_id: { [Op.iLike]: `%${query}%` } },
                    { student_id: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(attendance);
    } catch (error) {
        res.status(500).send(error.message);
    }
}