import { Router } from 'express';

import { getAutoSuggestUsers } from './getAutoSuggestUsers';
import { SUGGEST_USERS_ROUTE } from '../../constants/routes';

const suggestUsersRouter = Router();

suggestUsersRouter.get(SUGGEST_USERS_ROUTE, getAutoSuggestUsers);

export default suggestUsersRouter;
