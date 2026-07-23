const Joi = require('joi');

const validateBranches = (branches) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        address: Joi.string().required(),
        created_at: Joi.date(),
    });

    return schema.validate(branches);
}

module.exports = validateBranches;