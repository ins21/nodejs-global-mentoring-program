import { userService } from '../../services/userService';

export const getAutoSuggestUsers = async (req, res, next) => {
  try {
    const { login_substring = '', limit = '10' } = req.query;
    const users = await userService.getAutoSuggestUsers(login_substring, +limit);

    res.json(users);
  } catch (error) {
    next(error);
  }
};
