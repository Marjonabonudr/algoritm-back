const Joi = require('joi');

const validateParents = (parents) => {
    const schema = Joi.object({
        fullname: Joi.string().required(),
        phone: Joi.string().required(),
        phone2: Joi.string().allow(null),
        relation: Joi.string().required(),
        telegram: Joi.string().allow(null),
    });

    return schema.validate(parents);
};