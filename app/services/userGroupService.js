import { sequelize } from '../loaders/database';
import UserModel from '../models/userModel';
import GroupModel from '../models/groupModel';

class UserGroupService {
  constructor(userModel, groupModel) {
    this.userModel = userModel;
    this.groupModel = groupModel;
  }

  async addUsersToGroup(groupId, userIds) {
    const t = await sequelize.transaction();
    const group = await this.groupModel.findOne({ where: { id: groupId } });

    try {
      await Promise.all(
        userIds.map(async userId => {
          const user = await this.userModel.findOne({ where: { id: userId } });

          if (user) await user.addGroup(group, { transaction: t });
        })
      );

      await t.commit();
    } catch (error) {
      await t.rollback();
    }
  }
}

const userGroupService = new UserGroupService(UserModel, GroupModel);

export { userGroupService };
