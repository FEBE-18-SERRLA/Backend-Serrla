"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Articles", [
      {
        user_id: "1",
        title: "ArticleTitle1",
        description: "ArticleDescription1",
        topic_id: "4",
      },
      {
        user_id: "1",
        title: "ArticleTitle2",
        description: "ArticleDescription2",
        topic_id: "4",
      },
      {
        user_id: "2",
        title: "ArticleTitle3",
        description: "ArticleDescription3",
        topic_id: "1",
      },
      {
        user_id: "2",
        title: "ArticleTitle4",
        description: "ArticleDescription4",
        topic_id: "5",
      },
      {
        user_id: "3",
        title: "ArticleTitle5",
        description: "ArticleDescription5",
        topic_id: "5",
      },
      {
        user_id: "3",
        title: "ArticleTitle6",
        description: "ArticleDescription6",
        topic_id: "2",
      },
      {
        user_id: "4",
        title: "ArticleTitle7",
        description: "ArticleDescription7",
        topic_id: "1",
      },
      {
        user_id: "4",
        title: "ArticleTitle8",
        description: "ArticleDescription8",
        topic_id: "1",
      },
      {
        user_id: "5",
        title: "ArticleTitle9",
        description: "ArticleDescription9",
        topic_id: "1",
      },
      {
        user_id: "5",
        title: "ArticleTitle10",
        description: "ArticleDescription10",
        topic_id: "4",
      },
      {
        user_id: "6",
        title: "ArticleTitle11",
        description: "ArticleDescription11",
        topic_id: "5",
      },
      {
        user_id: "6",
        title: "ArticleTitle12",
        description: "ArticleDescription12",
        topic_id: "5",
      },
      {
        user_id: "7",
        title: "ArticleTitle13",
        description: "ArticleDescription13",
        topic_id: "2",
      },
      {
        user_id: "7",
        title: "ArticleTitle14",
        description: "ArticleDescription14",
        topic_id: "1",
      },
      {
        user_id: "8",
        title: "ArticleTitle15",
        description: "ArticleDescription15",
        topic_id: "5",
      },
      {
        user_id: "8",
        title: "ArticleTitle16",
        description: "ArticleDescription16",
        topic_id: "1",
      },
      {
        user_id: "9",
        title: "ArticleTitle17",
        description: "ArticleDescription17",
        topic_id: "2",
      },
      {
        user_id: "9",
        title: "ArticleTitle18",
        description: "ArticleDescription18",
        topic_id: "3",
      },
      {
        user_id: "10",
        title: "ArticleTitle19",
        description: "ArticleDescription19",
        topic_id: "2",
      },
      {
        user_id: "10",
        title: "ArticleTitle20",
        description: "ArticleDescription20",
        topic_id: "1",
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
