import Joi from 'joi';

const schema = Joi.object().keys({
  groupId: Joi.number().required(),
  userIds: Joi.array().required().min(1).items(Joi.number())
});

export const validator = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
