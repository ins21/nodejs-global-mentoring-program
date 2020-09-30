import Sequelize from 'sequelize';
import { sequelize } from '../loaders/database';

const GroupModel =  sequelize.define('groups', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING },
  permissions: { type: Sequelize.ARRAY(Sequelize.STRING) }
},
{ timestamps:false });

export default GroupModel;
