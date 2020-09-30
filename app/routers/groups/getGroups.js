import { groupService } from '../../services/groupService';

export const getGroups = async (req, res, next) => {
  try {
    const groups = await groupService.getGroups(req.body);

    res.json(groups);
  } catch (error) {
    next(error);
  }
};
