const {Op} = require('sequelize');
const {Finance_accounts, Students} = require('../models');
const validateFinance_accounts = require('../validations/finance_accounts.Validation');

exports.createFinance_accounts = async (req, res) => {
    const { error } = validateFinance_accounts(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const finance_accounts = await Finance_accounts.create(req.body);
        res.status(201).send(finance_accounts);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getFinance_accounts = async (req, res) => {
    try {
        const finance_accounts = await Finance_accounts.findAll();

        res.status(200).send(finance_accounts);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getFinance_accountsById = async (req, res) => {
    try {
        const finance_accounts = await Finance_accounts.findByPk(req.params.id,{
            include: [
                {model: Students, as: 'Students'},
            ]
        });

        if (!finance_accounts) return res.status(404).send('Finance_accounts not found');
        res.status(200).send(finance_accounts);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


exports.updateFinance_accounts = async (req, res) => {
    const { error } = validateFinance_accounts(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const finance_accounts = await Finance_accounts.findByPk(req.params.id);
        if (!finance_accounts) return res.status(404).send('Finance_accounts not found');
        await finance_accounts.update(req.body);

        res.status(200).send(finance_accounts);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteFinance_accounts = async (req, res) => {
    try {
        const finance_accounts = await Finance_accounts.findByPk(req.params.id);
        if (!finance_accounts) return res.status(404).send('Finance_accounts not found');

        const finance_accountsData = finance_accounts.toJSON();

        await finance_accounts.destroy();
        res.status(200).send(finance_accountsData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}


exports.searchFinance_accounts = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const finance_accounts = await Finance_accounts.findAll({
            where: {
                [Op.or]: [
                    { student_id: { [Op.iLike]: `%${query}%` } },
                    { balance: { [Op.iLike]: `%${query}%` } },
                    { debt: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(finance_accounts);
    } catch (error) {
        res.status(500).send(error.message);
    }
}