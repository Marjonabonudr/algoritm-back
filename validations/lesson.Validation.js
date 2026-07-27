const Joi = require('joi');

const validateLessons = (lessons) => {
    const schema = Joi.object({
        group_id: Joi.number().required(),
        lesson_date: Joi.date().required(),
        started_at: Joi.date().required(),
        ended_at: Joi.date().allow(null),
        status: Joi.string().required(),
    });

    return schema.validate(lessons);
}