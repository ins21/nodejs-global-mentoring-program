import { Router } from 'express';

import { getUsers } from './getUsers';
import { createUser } from './createUser';
import { getUserById } from './getUserById';
import { updateUser } from './updateUser';
import { deleteUser } from './deleteUser';
import { validator } from '../../validation/validation';

const usersRouter = Router();

usersRouter.get('/users', getUsers);
usersRouter.post('/users', validator, createUser);
usersRouter.get('/users/:id', getUserById);
usersRouter.put('/users/:id', validator, updateUser);
usersRouter.delete('/users/:id', deleteUser);

export default usersRouter;
