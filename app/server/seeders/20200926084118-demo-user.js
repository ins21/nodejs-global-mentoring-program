/* eslint-disable no-unused-vars */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        login: 'user1',
        password: 'password1',
        age: 11
      },
      {
        login: 'user2',
        password: 'password2',
        age: 22
      },
      {
        login: 'user3',
        password: 'password3',
        age: 33
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
