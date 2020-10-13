import { userService } from '../../services/userService';

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);

    if (!user) return res.status(404).end();

    await userService.deleteUser(id);

    return res.end();
  } catch (error) {
    next(error);
  }
};
