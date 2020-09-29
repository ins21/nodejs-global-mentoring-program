import { userService } from '../../services/userService';

export const getUsers = async (req, res) => {
  const users = await userService.getUsers(req.body);

  res.json(users);
};
