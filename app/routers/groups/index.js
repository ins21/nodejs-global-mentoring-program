import { Router } from 'express';

import { getGroups } from './getGroups';
import { createGroup } from './createGroup';
import { getGroupById } from './getGroupById';
import { updateGroup } from './updateGroup';
import { deleteGroup } from './deleteGroup';
import { validator } from '../../validation/groupsValidation';
import { GROUPS_ROUTE } from '../../constants/routes';

const groupsRouter = Router();

groupsRouter.get(GROUPS_ROUTE, getGroups);
groupsRouter.post(GROUPS_ROUTE, validator, createGroup);
groupsRouter.get(`${GROUPS_ROUTE}/:id`, getGroupById);
groupsRouter.put(`${GROUPS_ROUTE}/:id`, validator, updateGroup);
groupsRouter.delete(`${GROUPS_ROUTE}/:id`, deleteGroup);

export default groupsRouter;
