const {Op} = require('sequelize');
const {Branches} = require('../models');
const validateBranches = require('../validations/branches.Validation');


exports.createBranches = async (req, res) => {
    const { error } = validateBranches(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const branches = await Branches.create(req.body);
        res.status(201).send(branches);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getBranches = async (req, res) => {
    try {
        const branches = await Branches.findAll();

        res.status(200).send(branches);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getBranchesById = async (req, res) => {
    try {
        const branches = await Branches.findByPk(req.params.id,{
            include: [
                {model: Rooms, as: 'Rooms'}
            ]
        });

        if (!branches) return res.status(404).send('Branches not found');
        res.status(200).send(branches);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.updateBranches = async (req, res) => {
    const { error } = validateBranches(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const branches = await Branches.findByPk(req.params.id);
        if (!branches) return res.status(404).send('Branches not found');
        await branches.update(req.body);

        res.status(200).send(branches);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.deleteBranches = async (req, res) => {
    try {
        const branches = await Branches.findByPk(req.params.id);
        if (!branches) return res.status(404).send('Branches not found');

        const branchesData = branches.toJSON();

        await branches.destroy();
        res.status(200).send(branchesData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}


exports.searchBranches = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const branches = await Branches.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${query}%` } },
                    { address: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(branches);
    } catch (error) {
        res.status(500).send(error.message);
    }
}