const Joi = require('joi');

const validateUser = (user) => {
    const schema = Joi.object({
        role_id: Joi.number().required(),
        fullname: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().required(),
        password_hash: Joi.string().required(),
        is_active: Joi.boolean().required(),
        created_at: Joi.date(),
        updated_at: Joi.date(),
    });

    return schema.validate(user);
}

module.exports = validateUser;