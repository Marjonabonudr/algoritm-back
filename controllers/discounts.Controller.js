const {Op} = require('sequelize');
const {Discounts, Students} = require('../models');
const validateDiscounts = require('../validations/discounts.Validation');



exports.createDiscounts = async (req, res) => {
    const { error } = validateDiscounts(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const discounts = await Discounts.create(req.body);
        res.status(201).send(discounts);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getDiscounts = async (req, res) => {
    try {
        const discounts = await Discounts.findAll();

        res.status(200).send(discounts);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getDiscountsById = async (req, res) => {
    try {
        const discounts = await Discounts.findByPk(req.params.id,{
            include: [
                {model: Students, as: 'Students'},
            ]
        });

        if (!discounts) return res.status(404).send('Discounts not found');
        res.status(200).send(discounts);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.updateDiscounts = async (req, res) => {
    const { error } = validateDiscounts(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const discounts = await Discounts.findByPk(req.params.id);
        if (!discounts) return res.status(404).send('Discounts not found');
        await discounts.update(req.body);

        res.status(200).send(discounts);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.deleteDiscounts = async (req, res) => {
    try {
        const discounts = await Discounts.findByPk(req.params.id);
        if (!discounts) return res.status(404).send('Discounts not found');

        const discountsData = discounts.toJSON();

        await discounts.destroy();
        res.status(200).send(discountsData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}


exports.searchDiscounts = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const discounts = await Discounts.findAll({
            where: {
                [Op.or]: [
                    { student_id: { [Op.iLike]: `%${query}%` } },   
                    { type: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(discounts);
    } catch (error) {
        res.status(500).send(error.message);
    }
}