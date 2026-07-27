const {Op} = require('sequelize');
const {Grants, Students} = require('../models');
const validateGrants = require('../validations/grants.Validation');



exports.createGrants = async (req, res) => {
    const { error } = validateGrants(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const grants = await Grants.create(req.body);
        res.status(201).send(grants);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getGrants = async (req, res) => {
    try {
        const grants = await Grants.findAll();

        res.status(200).send(grants);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getGrantsById = async (req, res) => {
    try {
        const grants = await Grants.findByPk(req.params.id,{
            include: [
                {model: Students, as: 'Students'},
            ]
        });

        if (!grants) return res.status(404).send('Grants not found');
        res.status(200).send(grants);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.updateGrants = async (req, res) => {
    const { error } = validateGrants(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const grants = await Grants.findByPk(req.params.id);
        if (!grants) return res.status(404).send('Grants not found');
        await grants.update(req.body);

        res.status(200).send(grants);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.deleteGrants = async (req, res) => {
    try {
        const grants = await Grants.findByPk(req.params.id);
        if (!grants) return res.status(404).send('Grants not found');

        const grantsData = grants.toJSON();

        await grants.destroy();
        res.status(200).send(grantsData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}


exports.searchGrants = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const grants = await Grants.findAll({
            where: {
                [Op.or]: [
                    { student_id: { [Op.iLike]: `%${query}%` } },   
                    { type: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(grants);
    } catch (error) {
        res.status(500).send(error.message);
    }
}