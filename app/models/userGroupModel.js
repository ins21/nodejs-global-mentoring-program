import Sequelize from 'sequelize';
import { sequelize } from '../loaders/database';

const UserGroupModel =  sequelize.define('usersGroups', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  userid: {
    type: Sequelize.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  groupid: {
    type: Sequelize.INTEGER,
    references: {
      model: 'groups',
      key: 'id'
    }
  }
},
{ timestamps:false });

export default UserGroupModel;
