const Joi = require('joi');

const validateStudentTransfer = (studentTransfer) => {
    const schema = Joi.object({
        student_id: Joi.number().required(),
        old_teacher: Joi.number().required(),
        new_teacher: Joi.number().required(),
        reason: Joi.string().required(),
        created_at: Joi.date().required(),
    });

    return schema.validate(studentTransfer);
};