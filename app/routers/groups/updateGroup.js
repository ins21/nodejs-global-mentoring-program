import { groupService } from '../../services/groupService';

export const updateGroup = async (req, res, next) => {
  try {
    const { id } = req.params;
    const group = await groupService.getGroupById(id);

    if (!group) return res.status(404).end();

    await groupService.updateGroup(id, req.body);

    return res.end();
  } catch (error) {
    next(error);
  }
};
