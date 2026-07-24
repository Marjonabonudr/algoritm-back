const Joi = require('joi');

const validateTeachers = (teachers) => {
    const schema = Joi.object({
        user_id: Joi.number().required(),
        branch_id: Joi.number().required(),
        salary_per_student: Joi.number(),
        is_active: Joi.boolean().required(),
        created_at: Joi.date(),
    });

    return schema.validate(teachers);
}

module.exports = validateTeachers;