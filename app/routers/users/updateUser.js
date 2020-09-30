import { userService } from '../../services/userService';

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);

    if (!user) return res.status(404).end();

    await userService.updateUser(id, req.body);

    return res.end();
  } catch (error) {
    next(error);
  }
};
