const Joi = require('joi');

const validateCourses = (courses) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        duration_month: Joi.number().required(),
        created_at: Joi.date(),
    });

    return schema.validate(courses);
}

module.exports = validateCourses;