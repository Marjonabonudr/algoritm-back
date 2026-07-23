const {Op} = require('sequelize');
const {Roles} = require('../models');
const validateRoles = require('../validations/roles.Validation');



exports.createRoles = async (req, res) => {
    const { error } = validateRoles(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const roles = await Roles.create(req.body);
        res.status(201).send(roles);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getRoles = async (req, res) => {
    try {
        const roles = await Roles.findAll();

        res.status(200).send(roles);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getRolesById = async (req, res) => {
    try {
        const roles = await Roles.findByPk(req.params.id);

        if (!roles) return res.status(404).send('Roles not found');
        res.status(200).send(roles);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.updateRoles = async (req, res) => {
    const { error } = validateRoles(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const roles = await Roles.findByPk(req.params.id);
        if (!roles) return res.status(404).send('Roles not found');
        await roles.update(req.body);

        res.status(200).send(roles);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.deleteRoles = async (req, res) => {
    try {
        const roles = await Roles.findByPk(req.params.id);
        if (!roles) return res.status(404).send('Roles not found');

        const rolesData = roles.toJSON();

        await roles.destroy();
        res.status(200).send(rolesData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}



exports.searchRoles = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const roles = await Roles.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } }, 
                    { level: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(roles);
    } catch (error) {
        res.status(500).send(error.message);
    }
}