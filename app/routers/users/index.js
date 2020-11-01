import { Router } from 'express';

import { getUsers } from './getUsers';
import { createUser } from './createUser';
import { getUserById } from './getUserById';
import { updateUser } from './updateUser';
import { deleteUser } from './deleteUser';
import { validator } from '../../validation/usersValidation';
import { USERS_ROUTE } from '../../constants/routes';

const usersRouter = Router();

usersRouter.get(USERS_ROUTE, getUsers);
usersRouter.post(USERS_ROUTE, validator, createUser);
usersRouter.get(`${USERS_ROUTE}/:id`, getUserById);
usersRouter.put(`${USERS_ROUTE}/:id`, validator, updateUser);
usersRouter.delete(`${USERS_ROUTE}/:id`, deleteUser);

export default usersRouter;
