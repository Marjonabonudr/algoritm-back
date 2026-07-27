const {Op} = require('sequelize');
const {Payments, Finance_accounts, Users} = require('../models');
const validatePayments = require('../validations/payments.Validation');


exports.createPayments = async (req, res) => {
    const { error } = validatePayments(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const payments = await Payments.create(req.body);
        res.status(201).send(payments);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


exports.getPayments = async (req, res) => {
    try {
        const payments = await Payments.findAll();

        res.status(200).send(payments);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.getPaymentsById = async (req, res) => {
    try {
        const payments = await Payments.findByPk(req.params.id,{
            include: [
                {model: Finance_accounts, as: 'FinanceAccounts'},
                {model: Users, as: 'Cashier'}
            ]
        });

        if (!payments) return res.status(404).send('Payments not found');
        res.status(200).send(payments);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.updatePayments = async (req, res) => {
    const { error } = validatePayments(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const payments = await Payments.findByPk(req.params.id);
        if (!payments) return res.status(404).send('Payments not found');
        await payments.update(req.body);

        res.status(200).send(payments);
    } catch (error) {
        res.status(500).send(error.message);
    }
}



exports.deletePayments = async (req, res) => {
    try {
        const payments = await Payments.findByPk(req.params.id);
        if (!payments) return res.status(404).send('Payments not found');

        const paymentsData = payments.toJSON();

        await payments.destroy();
        res.status(200).send(paymentsData);
    }catch (error) {
        res.status(500).send(error.message);
    }
}


exports.searchPayments = async (req, res) => {
    try {
        console.log("Query received:", req.query.query);

        const { query } = req.query;
        if (!query) {
            return res.status(400).send("Search query is required");
        }

        const payments = await Payments.findAll({
            where: {
                [Op.or]: [
                    { finance_account_id: { [Op.iLike]: `%${query}%` } },
                    { cashier_id: { [Op.iLike]: `%${query}%` } },
                ],
            },
        });
        res.status(200).send(payments);
    } catch (error) {
        res.status(500).send(error.message);
    }
}