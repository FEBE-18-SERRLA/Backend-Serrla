"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Reviews", [
      {
        user_id: 1,
        course_id: 1,
        star: 5,
        review: "Materinya sangat menarik",
      },
      {
        user_id: 2,
        course_id: 1,
        star: 4,
        review: "Bagus",
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
