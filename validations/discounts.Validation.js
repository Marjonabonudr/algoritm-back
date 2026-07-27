const Joi = require('joi');

const validateDiscounts = (discounts) => {
    const schema = Joi.object({
        student_id: Joi.number().required(),
        type: Joi.string().required(),
        percent: Joi.number().allow(null),
        amount: Joi.number().allow(null),
        reason: Joi.string().required(),
        start_date: Joi.date().required(),
        end_date: Joi.date().allow(null),
    });

    return schema.validate(discounts);
}

module.exports = validateDiscounts;