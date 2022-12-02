"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Article_Comments", [
      {
        user_id: "1",
        article_id: "37",
        comment: "Comment1",
      },
      {
        user_id: "1",
        article_id: "16",
        comment: "Comment2",
      },
      {
        user_id: "2",
        article_id: "12",
        comment: "Comment3",
      },
      {
        user_id: "2",
        article_id: "27",
        comment: "Comment4",
      },
      {
        user_id: "3",
        article_id: "12",
        comment: "Comment5",
      },
      {
        user_id: "3",
        article_id: "39",
        comment: "Comment6",
      },
      {
        user_id: "4",
        article_id: "9",
        comment: "Comment7",
      },
      {
        user_id: "4",
        article_id: "8",
        comment: "Comment8",
      },
      {
        user_id: "5",
        article_id: "24",
        comment: "Comment9",
      },
      {
        user_id: "5",
        article_id: "38",
        comment: "Comment10",
      },
      {
        user_id: "6",
        article_id: "22",
        comment: "Comment11",
      },
      {
        user_id: "6",
        article_id: "30",
        comment: "Comment12",
      },
      {
        user_id: "7",
        article_id: "8",
        comment: "Comment13",
      },
      {
        user_id: "7",
        article_id: "39",
        comment: "Comment14",
      },
      {
        user_id: "8",
        article_id: "27",
        comment: "Comment15",
      },
      {
        user_id: "8",
        article_id: "12",
        comment: "Comment16",
      },
      {
        user_id: "9",
        article_id: "16",
        comment: "Comment17",
      },
      {
        user_id: "9",
        article_id: "32",
        comment: "Comment18",
      },
      {
        user_id: "10",
        article_id: "36",
        comment: "Comment19",
      },
      {
        user_id: "10",
        article_id: "5",
        comment: "Comment20",
      },
      {
        user_id: "11",
        article_id: "23",
        comment: "Comment21",
      },
      {
        user_id: "11",
        article_id: "30",
        comment: "Comment22",
      },
      {
        user_id: "12",
        article_id: "27",
        comment: "Comment23",
      },
      {
        user_id: "12",
        article_id: "20",
        comment: "Comment24",
      },
      {
        user_id: "13",
        article_id: "19",
        comment: "Comment25",
      },
      {
        user_id: "13",
        article_id: "34",
        comment: "Comment26",
      },
      {
        user_id: "14",
        article_id: "3",
        comment: "Comment27",
      },
      {
        user_id: "14",
        article_id: "37",
        comment: "Comment28",
      },
      {
        user_id: "15",
        article_id: "25",
        comment: "Comment29",
      },
      {
        user_id: "15",
        article_id: "26",
        comment: "Comment30",
      },
      {
        user_id: "16",
        article_id: "39",
        comment: "Comment31",
      },
      {
        user_id: "16",
        article_id: "5",
        comment: "Comment32",
      },
      {
        user_id: "17",
        article_id: "15",
        comment: "Comment33",
      },
      {
        user_id: "17",
        article_id: "14",
        comment: "Comment34",
      },
      {
        user_id: "18",
        article_id: "14",
        comment: "Comment35",
      },
      {
        user_id: "18",
        article_id: "2",
        comment: "Comment36",
      },
      {
        user_id: "19",
        article_id: "36",
        comment: "Comment37",
      },
      {
        user_id: "19",
        article_id: "29",
        comment: "Comment38",
      },
      {
        user_id: "20",
        article_id: "36",
        comment: "Comment39",
      },
      {
        user_id: "20",
        article_id: "9",
        comment: "Comment40",
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
