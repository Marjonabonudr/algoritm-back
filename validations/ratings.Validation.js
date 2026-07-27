const Joi = require('joi');

const validateRatings = (ratings) => {
    const schema = Joi.object({
        lesson_id: Joi.number().required(),
        student_id: Joi.number().required(),
        teacher_id: Joi.number().required(),
        score: Joi.number().required(),
        comment: Joi.string().required(),
    });

    return schema.validate(ratings);
}