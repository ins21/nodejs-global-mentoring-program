import { userService } from '../../services/userService';

export const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);

    if (user) res.json(user);
    else res.status(404).end();
  } catch (error) {
    next(error);
  }
};
