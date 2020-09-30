import { Router } from 'express';

import { getAutoSuggestUsers } from './getAutoSuggestUsers';

const suggestUsersRouter = Router();

suggestUsersRouter.get('/suggest-users', getAutoSuggestUsers);

export default suggestUsersRouter;
