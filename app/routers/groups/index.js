import { Router } from 'express';

import { getGroups } from './getGroups';
import { createGroup } from './createGroup';
import { getGroupById } from './getGroupById';
import { updateGroup } from './updateGroup';
import { deleteGroup } from './deleteGroup';
import { validator } from '../../validation/groupsValidation';

const groupsRouter = Router();

groupsRouter.get('/groups', getGroups);
groupsRouter.post('/groups', validator, createGroup);
groupsRouter.get('/groups/:id', getGroupById);
groupsRouter.put('/groups/:id', validator, updateGroup);
groupsRouter.delete('/groups/:id', deleteGroup);

export default groupsRouter;
