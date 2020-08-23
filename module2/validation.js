import Joi from 'joi';

const schema = Joi.object().keys({
  login: Joi.string().alphanum().min(1).required(),
  password: Joi.string().alphanum().min(6).required(),
  age: Joi.number().min(4).max(130).required()
});

export const validator = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
