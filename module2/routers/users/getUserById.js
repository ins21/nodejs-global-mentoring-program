import { findUserById } from '../../users';

export const getUserById = (req, res) => {
  const user = findUserById(req.params.id);

  if (user) res.send(user);
  else res.sendStatus(404);
};
