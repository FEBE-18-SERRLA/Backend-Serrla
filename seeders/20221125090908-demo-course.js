"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Courses", [
      {
        name: "Name Course 1",
        description: "Description Course 1",
        image: "https://belajart.id/wp-content/uploads/2021/04/kelas-menggambar-dasar.jpg",
        track_id: 1,
        instructure_id: 1,
        exp_point: 300,
      },
      {
        name: "Name Course 2",
        description: "Description Course 2",
        image: "https://belajart.id/wp-content/uploads/2021/04/kelas-menggambar-figur.jpg",
        track_id: 1,
        instructure_id: 2,
        exp_point: 200,
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
