const Joi = require('joi');

const validatePayments = (payments) => {
    const schema = Joi.object({
        finance_account_id: Joi.number().required(),
        amount: Joi.number().required(),
        payment_type: Joi.string().required(),
        paid_at: Joi.date().required(),
        cashier_id: Joi.number().required(),
    });

    return schema.validate(payments);
}