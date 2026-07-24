const Joi = require('joi');

const validateSchedules = (schedules) => {
    const schema = Joi.object({
        group_id: Joi.number().required(),
        weekday: Joi.number().required(),
        start_time: Joi.date().required(),
        end_time: Joi.date().required(),
    });

    return schema.validate(schedules);
}

module.exports = validateSchedules;