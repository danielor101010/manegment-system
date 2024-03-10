import Joi from 'joi';

export const userSchema = Joi.object({
    id: Joi.number().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    isAdmin: Joi.boolean()
});

