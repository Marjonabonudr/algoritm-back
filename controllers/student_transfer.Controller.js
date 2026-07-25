const {Op} = require('sequelize');
const {Student_transfer} = require('../models');
const validateStudentTransfer = require('../validations/student_transfer.Validation');



exports.createStudentTransfer = async (req, res) => {
    const { error } = validateStudentTransfer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const student_transfer = await Student_transfer.create(req.body);
        res.status(201).send(student_transfer);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getStudentTransfer = async (req, res) => {
    try {
        const student_transfer = await Student_transfer.findAll();

        res.status(200).send(student_transfer);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getStudentTransferById = async (req, res) => {
    try {
        const student_transfer = await Student_transfer.findByPk(req.params.id);

        if (!student_transfer) return res.status(404).send('Student_transfer not found');
        res.status(200).send(student_transfer);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.updateStudentTransfer = async (req, res) => {
    const { error } = validateStudentTransfer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const student_transfer = await Student_transfer.findByPk(req.params.id);
        if (!student_transfer) return res.status(404).send('Student_transfer not found');
        await student_transfer.update(req.body);

        res.status(200).send(student_transfer);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.deleteStudentTransfer = async (req, res) => {
    try {
        const student_transfer = await Student_transfer.findByPk(req.params.id);
        if (!student_transfer) return res.status(404).send('Student_transfer not found');

        const student_transferData = student_transfer.toJSON();

        await student_transfer.destroy();
        res.status(200).send(student_transferData);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.searchStudentTransfer = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const student_transfer = await Student_transfer.findAll({
            where: {
                [Op.or]: [
                    { student_id: { [Op.iLike]: `%${query}%` } },
                    { old_teacher: { [Op.iLike]: `%${query}%` } },
                    { new_teacher: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(student_transfer);
    } catch (error) {
        res.status(500).send(error.message);
    }
}