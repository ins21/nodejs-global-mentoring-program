import Joi from 'joi';

const schema = Joi.object().keys({
  name: Joi.string().alphanum().min(1).required(),
  permissions: Joi.array().required().min(1).items(Joi.string().valid('read', 'write', 'delete', 'share', 'upload_files'))
});

export const validator = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
