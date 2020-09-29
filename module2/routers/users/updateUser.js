import { findUserById } from '../../users';

export const updateUser = (req, res) => {
  const { login, password, age } = req.body;
  const user = findUserById(req.params.id);

  if (user) {
    user.login = login;
    user.password = password;
    user.age = +age;

    res.send(user);
  } else {
    res.sendStatus(404);
  }
};
