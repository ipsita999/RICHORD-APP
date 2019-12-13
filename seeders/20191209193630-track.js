'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Tracks', [{
        title: "track 1",
        0: ["A"],
        500: ["G"],
        600: [""],
        1000: ["D", "A", "G"],
        1500: ["D"],
        2000:["C", "D", "G"],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "track 2",
        0: ["A"],
    
        200: ["D"],
  
        400: ["D"],
    
        600: ["D"],
     
        800: ["D"],
 
        1000: ["D", "A", "G"],
    
        1200: ["D"],
   
        1400: ["D"],

        1600: ["G"],
   
        1800:["F", "D", "G"],
      
        2000:["C", "D", "G"],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: "track 3",
        0: ["A"],
        100: ["D"],
        200: ["D"],
        300: ["D"],
        400: ["D"],
        500: ["G"],
        600: ["D"],
        700: ["B","G"],
        800: ["D"],
        900: ["D"],
        1000: ["D", "A", "G"],
        1100: ["D"],
        1200: ["D"],
        1300: ["E"],
        1400: ["D"],
        1500: ["D"],
        1600: ["G"],
        1700: ["C", "D"],
        1800:["F", "D", "G"],
        1900:["E", "D", "G"],
        2000:["C", "D", "G"],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "track 4",
        0: ["A"],
        100: ["D"],
        200: ["D"],
        300: ["D"],
        400: ["D"],
        500: ["G"],
        600: ["D"],
        700: ["B","G"],
        800: ["D"],
        900: ["D"],
        1000: ["D", "A", "G"],
        1100: ["D"],
        1200: ["D"],
        1300: ["E"],
        1400: ["D"],
        1500: ["D"],
        1600: ["G"],
        1700: ["C", "D"],
        1800:["F", "D", "G"],
        1900:["E", "D", "G"],
        2000:["C", "D", "G"],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "track 5",
        0: ["A"],
        100: ["D"],
        200: ["D"],
        300: ["D"],
        400: ["D"],
        500: ["G"],
        600: ["D"],
        700: ["B","G"],
        800: ["D"],
        900: ["D"],
        1000: ["D", "A", "G"],
        1100: ["D"],
        1200: ["D"],
        1300: ["E"],
        1400: ["D"],
        1500: ["D"],
        1600: ["G"],
        1700: ["C", "D"],
        1800:["F", "D", "G"],
        1900:["E", "D", "G"],
        2000:["C", "D", "G"],
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Tracks', null, {});
  }
};
