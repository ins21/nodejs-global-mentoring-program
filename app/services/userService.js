import { Op } from 'sequelize';
import UserModel from '../models/userModel';
import GroupModel from '../models/groupModel';

class UserService {
  constructor(userModel, groupModel) {
    this.userModel = userModel;
    this.groupModel = groupModel;
  }

  async getUsers() {
    return this.userModel.findAll();
  }

  async createUser(login, password, age, groupId) {
    const user = await this.userModel.create({ login, password, age: +age });

    if (groupId) await this.assignGroupForUser(user, groupId);

    return user;
  }

  async assignGroupForUser(user, groupId) {
    const group = await this.groupModel.findOne({ where: { id: groupId } });

    return user.addGroup(group);
  }

  async getUserById(id) {
    return this.userModel.findOne({ where: { id } });
  }

  async updateUser(id, data) {
    return this.userModel.update(data, { where: { id } });
  }

  async deleteUser(id) {
    return this.userModel.destroy({ where: { id } });
  }

  async getAutoSuggestUsers(login_substring, limit) {
    const users = await this.userModel.findAll({
      where: { login: { [Op.like]: `%${login_substring}%` } },
      order: [['login', 'ASC']],
      limit
    });

    return users.map(user => user.toJSON());
  }
}

const userService = new UserService(UserModel, GroupModel);

export { userService };
