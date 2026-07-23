const Joi = require('joi');

const validateLogin = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().min(6).required().label('Parol'),
    });
    return schema.validate(data);
};

module.exports = validateLogin;