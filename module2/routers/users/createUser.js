import { v4 } from 'uuid';
import { createNewUser } from '../../users';

export const createUser = (req, res) => {
  const { login, password, age } = req.body;
  const newUser = {
    id: v4(),
    login,
    password,
    age: +age,
    isDeleted: false
  };

  createNewUser(newUser);

  res.status(201).send(newUser);
};
