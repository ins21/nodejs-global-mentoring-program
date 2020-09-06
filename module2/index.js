import express from 'express';

import usersRouter from './routers/users';

const app = express();

app.listen(3000, () => console.log('Server is running'));
app.use(express.json());
app.use('/api', usersRouter);
