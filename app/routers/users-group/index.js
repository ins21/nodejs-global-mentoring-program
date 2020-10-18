import { Router } from 'express';

import { addUsersToGroup } from './addUsersToGroup';
import { validator } from '../../validation/usersGroupValidation';
import { USERS_GROUP_ROUTE } from '../../constants/routes';

const usersGroupRouter = Router();

usersGroupRouter.post(USERS_GROUP_ROUTE, validator, addUsersToGroup);

export default usersGroupRouter;
