import UserModel from '../models/userModel';
import GroupModel from '../models/groupModel';

class GroupService {
  constructor(groupModel, userModel) {
    this.groupModel = groupModel;
    this.userModel = userModel;
  }

  async getGroups() {
    return this.groupModel.findAll();
  }

  async createGroup(name, permissions) {
    return this.groupModel.create(
      { name, permissions },
      {
        include: [{
          model: this.userModel,
          as: 'users'
        }]
      }
    );
  }

  async getGroupById(id) {
    return this.groupModel.findOne({ where: { id } });
  }

  async updateGroup(id, data) {
    return this.groupModel.update(data, { where: { id } });
  }

  async deleteGroup(id) {
    return this.groupModel.destroy({ where: { id } });
  }
}

const groupService = new GroupService(GroupModel, UserModel);

export { groupService };
