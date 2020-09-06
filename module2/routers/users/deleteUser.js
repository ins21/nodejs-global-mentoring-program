import { findUserById } from '../../users';

export const deleteUser = (req, res) => {
  const user = findUserById(req.params.id);

  if (user) {
    user.isDeleted = true;

    res.end();
  } else {
    res.sendStatus(404);
  }
};
