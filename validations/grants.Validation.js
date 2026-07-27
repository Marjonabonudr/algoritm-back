const Joi = require('joi');

const validateGrants = (grants) => {
    const schema = Joi.object({
        student_id: Joi.number().required(),
        type: Joi.string().required(),
        percent: Joi.number().allow(null),
        sponsor: Joi.string().required(),
        start_date: Joi.date().required(),
        end_date: Joi.date().allow(null),
    });

    return schema.validate(grants);
}

module.exports = validateGrants;