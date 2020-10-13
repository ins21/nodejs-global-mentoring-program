import { groupService } from '../../services/groupService';

export const deleteGroup = async (req, res, next) => {
  try {
    const { id } = req.params;
    const group = await groupService.getGroupById(id);

    if (!group) return res.status(404).end();

    await groupService.deleteGroup(id);

    return res.end();
  } catch (error) {
    next(error);
  }
};
