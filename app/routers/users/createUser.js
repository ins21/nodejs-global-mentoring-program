import { userService } from '../../services/userService';

export const createUser = async (req, res, next) => {
  try {
    const { login, password, age, groupId } = req.body;

    const user = await userService.createUser(login, password, age, groupId);

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
