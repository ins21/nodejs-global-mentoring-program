import { Router } from 'express';

import { addUsersToGroup } from './addUsersToGroup';
import { validator } from '../../validation/usersGroupValidation';

const usersGroupRouter = Router();

usersGroupRouter.post('/users-group', validator, addUsersToGroup);

export default usersGroupRouter;
