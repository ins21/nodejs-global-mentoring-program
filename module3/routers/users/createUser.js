import { userService } from '../../services/userService';

export const createUser = async (req, res) => {
  const { login, password, age } = req.body;

  const user = await userService.createUser(login, password, age);

  res.status(201).json(user);
};
