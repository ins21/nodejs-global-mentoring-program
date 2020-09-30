import { userService } from '../../services/userService';

export const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers(req.body);

    res.json(users);
  } catch (error) {
    next(error);
  }
};
