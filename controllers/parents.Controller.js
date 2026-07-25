const {Op} = require('sequelize');
const {Parents, Students} = require('../models');
const validateParents = require('../validations/parents.Validation');



exports.createParents = async (req, res) => {
    const { error } = validateParents(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const parents = await Parents.create(req.body);
        res.status(201).send(parents);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getParents = async (req, res) => {
    try {
        const parents = await Parents.findAll();

        res.status(200).send(parents);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getParentsById = async (req, res) => {
    try {
        const parents = await Parents.findByPk(req.params.id);

        if (!parents) return res.status(404).send('Parents not found');
        res.status(200).send(parents);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.updateParents = async (req, res) => {
    const { error } = validateParents(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const parents = await Parents.findByPk(req.params.id);
        if (!parents) return res.status(404).send('Parents not found');
        await parents.update(req.body);

        res.status(200).send(parents);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.deleteParents = async (req, res) => {
    try {
        const parents = await Parents.findByPk(req.params.id);
        if (!parents) return res.status(404).send('Parents not found');

        const parentsData = parents.toJSON();

        await parents.destroy();
        res.status(200).send(parentsData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}



exports.searchParents = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const parents = await Parents.findAll({
            where: {
                [Op.or]: [
                    { fullname: { [Op.iLike]: `%${query}%` } },
                    { phone: { [Op.iLike]: `%${query}%` } },
                    { phone2: { [Op.iLike]: `%${query}%` } },
                    { telegram: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(parents);
    } catch (error) {
        res.status(500).send(error.message);
    }
}