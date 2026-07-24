const Joi = require('joi');

const validateAttendance = (attendance) => {
    const schema = Joi.object({
        lesson_id: Joi.number().required(),
        student_id: Joi.number().required(),
        status: Joi.string().required(),
        late_minutes: Joi.number().required(),
        penalty: Joi.boolean().required(),
        reason: Joi.string().required(),
    });

    return schema.validate(attendance);
}

module.exports = validateAttendance;