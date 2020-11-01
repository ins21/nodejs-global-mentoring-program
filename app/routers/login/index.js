import { Router } from 'express';

import { login } from './login';
import { LOGIN_ROUTE } from '../../constants/routes';

const loginRouter = Router();

loginRouter.post(LOGIN_ROUTE, login);

export default loginRouter;
