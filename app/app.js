import express from 'express';

import UserModel from './models/userModel';
import GroupModel from './models/groupModel';
import UserGroupModel from './models/userGroupModel';
import usersRouter from './routers/users';
import suggestUsersRouter from './routers/suggest-users';
import groupsRouter from './routers/groups';
import usersGroupRouter from './routers/users-group';
import { logger } from './middlewares/logger/logger';
import { infoLogger } from './middlewares/logger/infoLogger';
import { errorLogger } from './middlewares/logger/errorLogger';

const startServer = () => {
  UserGroupModel.belongsTo(UserGroupModel, { foreignKey: 'userid', sourceKey: 'userid', as: 'users', hooks: true, onDelete: 'cascade' });
  UserGroupModel.belongsTo(GroupModel, { foreignKey: 'groupid', sourceKey: 'groupid', as: 'groups', hooks: true, onDelete: 'cascade' });
  GroupModel.belongsToMany(UserModel, { through: UserGroupModel, as: 'users', foreignKey: 'groupid' });
  UserModel.belongsToMany(GroupModel, { through: UserGroupModel, as: 'groups', foreignKey: 'userid' });

  const app = express();

  app.use(express.json());
  app.use(infoLogger);
  app.use('/api', usersRouter, suggestUsersRouter, groupsRouter, usersGroupRouter);
  app.use(errorLogger);
  app.listen(process.env.PORT || 3000, () => console.log('Server is running'));

  process.on('uncaughtException', err => {
    logger.error(`uncaughtException error: '${err.message}'. ${err.stack}`);
    process.exit();
  });

  process.on('unhandledRejection', err => {
    logger.error(`unhandledRejection error: '${err.message}'. ${err.stack}`);
    process.exit();
  });
};

startServer();
