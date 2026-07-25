const {Op} = require('sequelize');
const {StudentGroups} = require('../models');
const validateStudentGroups = require('../validations/student_groups.Validation');

exports.createStudentGroups = async (req, res) => {
    const { error } = validateStudentGroups(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const student_groups = await StudentGroups.create(req.body);
        res.status(201).send(student_groups);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getStudentGroups = async (req, res) => {
    try {
        const student_groups = await StudentGroups.findAll();

        res.status(200).send(student_groups);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getStudentGroupsById = async (req, res) => {
    try {
        const student_groups = await StudentGroups.findByPk(req.params.id);

        if (!student_groups) return res.status(404).send('StudentGroups not found');
        res.status(200).send(student_groups);
    } catch (error) {
        res.status(500).send(error.message);
    }
}




exports.updateStudentGroups = async (req, res) => {
    const { error } = validateStudentGroups(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const student_groups = await StudentGroups.findByPk(req.params.id);
        if (!student_groups) return res.status(404).send('StudentGroups not found');
        await student_groups.update(req.body);

        res.status(200).send(student_groups);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.deleteStudentGroups = async (req, res) => {
    try {
        const student_groups = await StudentGroups.findByPk(req.params.id);
        if (!student_groups) return res.status(404).send('StudentGroups not found');

        const student_groupsData = student_groups.toJSON();

        await student_groups.destroy();
        res.status(200).send(student_groupsData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}



exports.searchStudentGroups = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const student_groups = await StudentGroups.findAll({
            where: {
                [Op.or]: [
                    { student_id: { [Op.iLike]: `%${query}%` } }, 
                    { group_id: { [Op.iLike]: `%${query}%` } },
                    { status: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(student_groups);
    } catch (error) {
        res.status(500).send(error.message);
    }
}