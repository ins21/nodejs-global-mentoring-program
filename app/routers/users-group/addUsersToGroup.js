import { userGroupService } from '../../services/userGroupService';

export const addUsersToGroup = async (req, res) => {
  const { groupId, userIds } = req.body;

  await userGroupService.addUsersToGroup(groupId, userIds);

  res.end();
};
