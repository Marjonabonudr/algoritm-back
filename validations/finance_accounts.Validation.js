const Joi = require('joi');

const validateFinance_accounts = (finance_accounts) => {
    const schema = Joi.object({
        student_id: Joi.number().required(),
        balance: Joi.number().required(),
        debt: Joi.number().required(),
        advanced_payment: Joi.number().allow(null),
        due_day: Joi.number().required(),
        status: Joi.string().required(),
    });

    return schema.validate(finance_accounts);
}