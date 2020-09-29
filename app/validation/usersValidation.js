import Joi from 'joi';

const schema = Joi.object().keys({
  login: Joi.string().alphanum().min(1).required(),
  password: Joi.string().required().pattern(new RegExp('[A-Za-z0-9]*([a-zA-Z]+[0-9]+|[0-9]+[a-zA-Z]+)')),
  age: Joi.number().min(4).max(130).required(),
  groupId: Joi.number()
});

export const validator = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
