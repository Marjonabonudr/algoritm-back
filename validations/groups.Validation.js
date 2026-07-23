const Joi = require('joi');

const validateGroups = (groups) => {
    const schema = Joi.object({
        course_id: Joi.number().required(),
        teacher_id: Joi.number().required(),
        room_id: Joi.number().required(),
        name: Joi.string().required(),
        start_date: Joi.date().required(),
        end_date: Joi.date().required(),
        lesson_duration: Joi.number().required(),
        monthly_lessons: Joi.number().required(),
        status: Joi.string().required(),
    });

    return schema.validate(groups);
}

module.exports = validateGroups;