import jwt from 'jsonwebtoken';
import { config } from '../../config';

export const login = (req, res) => {
  const { username, password } = req.body;
  const payload = { username, password };
  const token = jwt.sign(payload, config.jwt_secret, { expiresIn: 1000000 });

  res.json(token);
};
