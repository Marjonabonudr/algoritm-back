const Joi = require('joi');

const validateRooms = (rooms) => {
    const schema = Joi.object({
        branch_id: Joi.number().required(),
        name: Joi.string().required(),
        capacity: Joi.number().required(),
    });

    return schema.validate(rooms);
}

module.exports = validateRooms;