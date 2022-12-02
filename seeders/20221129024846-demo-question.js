"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", [
      {
        test_id: 1,
        question: "Soal 1",
        a: "Pilihan A",
        b: "Pilihan B",
        c: "Pilihan C",
        d: "Pilihan D",
        answer_key: "a",
      },
      {
        test_id: 1,
        question: "Soal 2",
        a: "Pilihan A",
        b: "Pilihan B",
        c: "Pilihan C",
        d: "Pilihan D",
        answer_key: "b",
      },
      {
        test_id: 1,
        question: "Soal 3",
        a: "Pilihan A",
        b: "Pilihan B",
        c: "Pilihan C",
        d: "Pilihan D",
        answer_key: "c",
      },
      {
        test_id: 1,
        question: "Soal 4",
        a: "Pilihan A",
        b: "Pilihan B",
        c: "Pilihan C",
        d: "Pilihan D",
        answer_key: "d",
      },
      {
        test_id: 1,
        question: "Soal 5",
        a: "Pilihan A",
        b: "Pilihan B",
        c: "Pilihan C",
        d: "Pilihan D",
        answer_key: "a",
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
