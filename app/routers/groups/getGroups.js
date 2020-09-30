import { groupService } from '../../services/groupService';

export const getGroups = async (req, res) => {
  const groups = await groupService.getGroups(req.body);

  res.json(groups);
};
