import { groupService } from '../../services/groupService';

export const getGroupById = async (req, res, next) => {
  try {
    const group = await groupService.getGroupById(req.params.id);

    if (group) res.json(group);
    else res.status(404).end();
  } catch (error) {
    next(error);
  }
};
