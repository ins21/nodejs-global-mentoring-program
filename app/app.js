import express from 'express';

import UserModel from './models/userModel';
import GroupModel from './models/groupModel';
import UserGroupModel from './models/userGroupModel';
import usersRouter from './routers/users';
import suggestUsersRouter from './routers/suggest-users';
import groupsRouter from './routers/groups';
import usersGroupRouter from './routers/users-group';

const startServer = () => {
  UserGroupModel.belongsTo(UserGroupModel, { foreignKey: 'userid', sourceKey: 'userid', as: 'users', hooks: true, onDelete: 'cascade' });
  UserGroupModel.belongsTo(GroupModel, { foreignKey: 'groupid', sourceKey: 'groupid', as: 'groups', hooks: true, onDelete: 'cascade' });
  GroupModel.belongsToMany(UserModel, { through: UserGroupModel, as: 'users', foreignKey: 'groupid' });
  UserModel.belongsToMany(GroupModel, { through: UserGroupModel, as: 'groups', foreignKey: 'userid' });

  const app = express();

  app.use(express.json());
  app.use('/api', usersRouter, suggestUsersRouter, groupsRouter, usersGroupRouter);
  app.listen(process.env.PORT || 3000, () => console.log('Server is running'));
};

startServer();
