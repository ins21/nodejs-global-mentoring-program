const users = [];

export const createNewUser = newUser => users.push(newUser);

export const findUserById = id => users
  .filter(user => !user.isDeleted)
  .find(user => user.id === id);

export const getAutoSuggestUsers = (loginSubstring = '', limit) => users
  .filter(user => !user.isDeleted && user.login.includes(loginSubstring))
  .sort((user1, user2) => user1.login > user2.login ? 1 : -1)
  .slice(0, limit);
