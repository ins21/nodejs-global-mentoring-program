import jwt from 'jsonwebtoken';
import { config } from '../../config';
import { NO_TOKEN_ERROR, AUTHENTICATION_ERROR } from '../../constants/messages';
import { LOGIN_ROUTE } from '../../constants/routes';

export const checkToken = (req, res, next) => {
  if (req.path === LOGIN_ROUTE) return next();

  const token = req.headers['x-access-token'];

  if (!token) return res.status(401).send({ message: NO_TOKEN_ERROR });

  return jwt.verify(token, config.jwt_secret, err => {
    if (err) return res.status(403).send({ message: AUTHENTICATION_ERROR });

    next();
  });
};
