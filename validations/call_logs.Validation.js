const Joi = require('joi');

const validateCall_logs = (call_logs) => {
    const schema = Joi.object({
        student_id: Joi.number().required(),
        attendance_id: Joi.number().required(),
        operator: Joi.number().required(),
        result: Joi.string().required(),
        reason: Joi.string().required(),
        called_at: Joi.date().required(),
    });

    return schema.validate(call_logs);
}