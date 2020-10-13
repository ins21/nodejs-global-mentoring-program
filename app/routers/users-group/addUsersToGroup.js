import { userGroupService } from '../../services/userGroupService';

export const addUsersToGroup = async (req, res, next) => {
  try {
    const { groupId, userIds } = req.body;

    await userGroupService.addUsersToGroup(groupId, userIds);

    res.end();
  } catch (error) {
    next(error);
  }
};
