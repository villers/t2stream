'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('users', [{
        username: 'test',
        password:'test',
        createdAt: Date.now()
      }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('users', null, {});
  }
};
