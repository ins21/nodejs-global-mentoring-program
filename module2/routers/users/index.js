import { Router } from 'express';

import { getUsers } from './getUsers';
import { createUser } from './createUser';
import { getUserById } from './getUserById';
import { updateUser } from './updateUser';
import { deleteUser } from './deleteUser';
import { validator } from '../../../module2/validation';

const router = Router();

router.get('/users', getUsers);
router.post('/users', validator, createUser);
router.get('/users/:id', getUserById);
router.put('/users/:id', validator, updateUser);
router.delete('/users/:id', deleteUser);

export default router;
