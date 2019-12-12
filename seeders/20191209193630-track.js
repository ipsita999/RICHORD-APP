'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Tracks', [{
        title: "track 1",
        0: ["P","G"],
        100: ["D"],
        200: ["G", "D"],
        300: ["P", "G", "D"],
        400: ["G"],
        500: ["G"],
        600: ["P","G"],
        700: ["P","G"],
        800: ["D"],
        900: ["G", "D"],
        1000: ["D"],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "track 2",
        0: ["P","G"],
        100: ["D"],
        200: ["G", "D"],
        300: ["P", "G", "D"],
        400: ["G"],
        500: ["G"],
        600: ["P","G"],
        700: ["P","G"],
        800: ["D"],
        900: ["G", "D"],
        1000: ["D"],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: "track 3",
        0: ["P","G"],
        100: ["D"],
        200: ["G", "D"],
        300: ["P", "G", "D"],
        400: ["G"],
        500: ["G"],
        600: ["P","G"],
        700: ["P","G"],
        800: ["D"],
        900: ["G", "D"],
        1000: ["D"],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "track 4",
        0: ["P","G"],
        100: ["D"],
        200: ["G", "D"],
        300: ["P", "G", "D"],
        400: ["G"],
        500: ["G"],
        600: ["P","G"],
        700: ["P","G"],
        800: ["D"],
        900: ["G", "D"],
        1000: ["D"],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "track 5",
        0: ["P","G"],
        100: ["D"],
        200: ["G", "D"],
        300: ["P", "G", "D"],
        400: ["G"],
        500: ["G"],
        600: ["P","G"],
        700: ["P","G"],
        800: ["D"],
        900: ["G", "D"],
        1000: ["D"],
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Tracks', null, {});
  }
};
