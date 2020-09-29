/* eslint-disable no-unused-vars */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('groups', [
      {
        name: 'group1',
        permissions: ['read']
      },
      {
        name: 'group2',
        permissions: ['read']
      },
      {
        name: 'group3',
        permissions: ['read']
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('groups', null, {});
  }
};
