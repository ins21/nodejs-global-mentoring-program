import { groupService } from '../../services/groupService';

export const getGroupById = async (req, res) => {
  const group = await groupService.getGroupById(req.params.id);

  if (group) res.json(group);
  else res.status(404).end();
};
