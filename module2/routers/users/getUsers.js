import { getAutoSuggestUsers } from '../../users';

export const getUsers = (req, res) => {
  const { login_substring, limit } = req.query;
  const users = getAutoSuggestUsers(login_substring, limit);

  if (users.length) res.send(users);
  else res.sendStatus(404);
};
