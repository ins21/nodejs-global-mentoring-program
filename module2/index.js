import express from 'express';
import { v4 } from 'uuid';

import { createUser, findUserById, getAutoSuggestUsers } from './users';
import { validator } from './validation';

const app = express();
const router = express.Router();

app.listen(3000, () => console.log('Server is running'));
app.use(express.json());
app.use('/', router);

router.route('/users')
  .post(validator, (req, res) => {
    const { login, password, age } = req.body;
    const newUser = {
      id: v4(),
      login,
      password,
      age: +age,
      isDeleted: false
    };

    createUser(newUser);

    res.status(201).send(newUser);
  })
  .get((req, res) => {
    const { login_substring, limit } = req.query;
    const users = getAutoSuggestUsers(login_substring, limit);

    if (users.length) res.send(users);
    else res.sendStatus(404);
  });


router.route('/users/:id')
  .get((req, res) => {
    const user = findUserById(req.params.id);

    if (user) res.send(user);
    else res.sendStatus(404);
  })
  .put(validator, (req, res) => {
    const { login, password, age } = req.body;
    const user = findUserById(req.params.id);

    if (user) {
      user.login = login;
      user.password = password;
      user.age = +age;

      res.send(user);
    } else {
      res.sendStatus(404);
    }
  })
  .delete((req, res) => {
    const user = findUserById(req.params.id);

    if (user) {
      user.isDeleted = true;

      res.end();
    } else {
      res.sendStatus(404);
    }
  });
