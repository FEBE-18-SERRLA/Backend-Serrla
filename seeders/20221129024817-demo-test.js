"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Tests", [
      {
        course_id: 1,
        description: "Jawablah soal berikut:",
      },
      {
        course_id: 2,
        description: "Jawablah soal berikut:",
      },
      {
        course_id: 3,
        description: "Jawablah soal berikut:",
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
