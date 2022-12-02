"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Instructures", [
      {
        name: "Kak Bagas",
        bio: "Duta Tari Nusantara",
      },
      {
        name: "Kak Anggi",
        bio: "Juara Vokal se-RT",
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
