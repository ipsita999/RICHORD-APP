'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'user_id'
        }
      },
      title: {
        type: Sequelize.STRING
      },
      0: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      100: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      200: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      300: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      400: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      500: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      600: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      700: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      800: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      900: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      1000: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tracks');
  }
};