"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Likes", [
      {
        user_id: "1",
        article_id: "37",
      },
      {
        user_id: "1",
        article_id: "16",
      },
      {
        user_id: "2",
        article_id: "12",
      },
      {
        user_id: "2",
        article_id: "27",
      },
      {
        user_id: "3",
        article_id: "12",
      },
      {
        user_id: "3",
        article_id: "39",
      },
      {
        user_id: "4",
        article_id: "9",
      },
      {
        user_id: "4",
        article_id: "8",
      },
      {
        user_id: "5",
        article_id: "24",
      },
      {
        user_id: "5",
        article_id: "38",
      },
      {
        user_id: "6",
        article_id: "22",
      },
      {
        user_id: "6",
        article_id: "30",
      },
      {
        user_id: "7",
        article_id: "8",
      },
      {
        user_id: "7",
        article_id: "39",
      },
      {
        user_id: "8",
        article_id: "27",
      },
      {
        user_id: "8",
        article_id: "12",
      },
      {
        user_id: "9",
        article_id: "16",
      },
      {
        user_id: "9",
        article_id: "32",
      },
      {
        user_id: "10",
        article_id: "36",
      },
      {
        user_id: "10",
        article_id: "5",
      },
      {
        user_id: "11",
        article_id: "23",
      },
      {
        user_id: "11",
        article_id: "30",
      },
      {
        user_id: "12",
        article_id: "27",
      },
      {
        user_id: "12",
        article_id: "20",
      },
      {
        user_id: "13",
        article_id: "19",
      },
      {
        user_id: "13",
        article_id: "34",
      },
      {
        user_id: "14",
        article_id: "3",
      },
      {
        user_id: "14",
        article_id: "37",
      },
      {
        user_id: "15",
        article_id: "25",
      },
      {
        user_id: "15",
        article_id: "26",
      },
      {
        user_id: "16",
        article_id: "39",
      },
      {
        user_id: "16",
        article_id: "5",
      },
      {
        user_id: "17",
        article_id: "15",
      },
      {
        user_id: "17",
        article_id: "14",
      },
      {
        user_id: "18",
        article_id: "14",
      },
      {
        user_id: "18",
        article_id: "2",
      },
      {
        user_id: "19",
        article_id: "36",
      },
      {
        user_id: "19",
        article_id: "29",
      },
      {
        user_id: "20",
        article_id: "36",
      },
      {
        user_id: "20",
        article_id: "9",
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
