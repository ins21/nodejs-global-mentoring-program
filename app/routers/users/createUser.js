import { userService } from '../../services/userService';

export const createUser = async (req, res) => {
  const { login, password, age, groupId } = req.body;

  const user = await userService.createUser(login, password, age, groupId);

  res.status(201).json(user);
};
