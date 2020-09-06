import express from 'express';

import { userService } from './services/userService';
import UserModel from './models/userModel';
import usersRouter from './routers/users';
import suggestUsersRouter from './routers/suggest-users';

const startServer = () => {
  userService.setModel(UserModel);

  const app = express();

  app.use(express.json());
  app.use('/api', usersRouter, suggestUsersRouter);
  app.listen(process.env.PORT || 3000, () => console.log('Server is running'));
};

startServer();
