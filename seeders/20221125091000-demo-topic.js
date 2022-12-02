"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Topics", [
      {
        name: "Seni Rupa",
      },
      {
        name: "Seni Tari",
      },
      {
        name: "Seni Sastra",
      },
      {
        name: "Seni Musik",
      },
      {
        name: "Seni Pertunjukan",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
