const Joi = require('joi');

const validateRoles = (roles) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        level: Joi.number().required(),
        created_at: Joi.date(),
    });

    return schema.validate(roles);
}

module.exports = validateRoles;