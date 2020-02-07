'use strict';

const fakeData = [
  {
    username: 'richard1',
    email: 'richard@ga.co',
    password_digest: 'abc123',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    username: 'phil1',
    email: 'phil@ga.co',
    password_digest: 'abc123',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    username: 'ips1',
    email: 'ips@ga.co',
    password_digest: 'abc123',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', fakeData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
