const Joi = require('joi');

const createStudentGroupValidation = (studentGroup) => {
    const schema = Joi.object({
        student_id: Joi.number().required(),
        group_id: Joi.number().required(),
        joined_at: Joi.date().required(),
        left_at: Joi.date().allow(null),
        status: Joi.string().required(),
    });

    return schema.validate(studentGroup);
};