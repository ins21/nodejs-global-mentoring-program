import Sequelize from 'sequelize';
import { sequelize } from '../loaders/database';

const UserModel =  sequelize.define('users', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  age: { type: Sequelize.INTEGER }
},
{ timestamps:false });

export default UserModel;
