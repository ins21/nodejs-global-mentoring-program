import { Op } from 'sequelize';

class UserService {
  constructor(model) {
    this.userModel = model;
  }

  setModel(model) {
    this.userModel = model;
  }

  async getUsers() {
    return this.userModel.findAll();
  }

  async createUser(login, password, age) {
    return this.userModel.create({ login, password, age: +age });
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

const userService = new UserService();

export { userService };
