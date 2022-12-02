"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Favorites", [
      {
        user_id: "1",
        event_id: "9",
      },
      {
        user_id: "1",
        event_id: "16",
      },
      {
        user_id: "1",
        event_id: "17",
      },
      {
        user_id: "2",
        event_id: "17",
      },
      {
        user_id: "2",
        event_id: "21",
      },
      {
        user_id: "2",
        event_id: "6",
      },
      {
        user_id: "3",
        event_id: "4",
      },
      {
        user_id: "3",
        event_id: "19",
      },
      {
        user_id: "3",
        event_id: "7",
      },
      {
        user_id: "4",
        event_id: "11",
      },
      {
        user_id: "4",
        event_id: "24",
      },
      {
        user_id: "4",
        event_id: "10",
      },
      {
        user_id: "5",
        event_id: "7",
      },
      {
        user_id: "5",
        event_id: "3",
      },
      {
        user_id: "5",
        event_id: "5",
      },
      {
        user_id: "6",
        event_id: "4",
      },
      {
        user_id: "6",
        event_id: "15",
      },
      {
        user_id: "6",
        event_id: "16",
      },
      {
        user_id: "7",
        event_id: "8",
      },
      {
        user_id: "7",
        event_id: "23",
      },
      {
        user_id: "7",
        event_id: "24",
      },
      {
        user_id: "8",
        event_id: "19",
      },
      {
        user_id: "8",
        event_id: "3",
      },
      {
        user_id: "8",
        event_id: "11",
      },
      {
        user_id: "9",
        event_id: "12",
      },
      {
        user_id: "9",
        event_id: "22",
      },
      {
        user_id: "9",
        event_id: "19",
      },
      {
        user_id: "10",
        event_id: "10",
      },
      {
        user_id: "10",
        event_id: "11",
      },
      {
        user_id: "10",
        event_id: "6",
      },
      {
        user_id: "11",
        event_id: "4",
      },
      {
        user_id: "11",
        event_id: "19",
      },
      {
        user_id: "11",
        event_id: "14",
      },
      {
        user_id: "12",
        event_id: "24",
      },
      {
        user_id: "12",
        event_id: "20",
      },
      {
        user_id: "12",
        event_id: "8",
      },
      {
        user_id: "13",
        event_id: "10",
      },
      {
        user_id: "13",
        event_id: "13",
      },
      {
        user_id: "13",
        event_id: "16",
      },
      {
        user_id: "14",
        event_id: "9",
      },
      {
        user_id: "14",
        event_id: "18",
      },
      {
        user_id: "14",
        event_id: "23",
      },
      {
        user_id: "15",
        event_id: "1",
      },
      {
        user_id: "15",
        event_id: "14",
      },
      {
        user_id: "15",
        event_id: "4",
      },
      {
        user_id: "16",
        event_id: "7",
      },
      {
        user_id: "16",
        event_id: "19",
      },
      {
        user_id: "16",
        event_id: "15",
      },
      {
        user_id: "17",
        event_id: "2",
      },
      {
        user_id: "17",
        event_id: "21",
      },
      {
        user_id: "17",
        event_id: "14",
      },
      {
        user_id: "18",
        event_id: "8",
      },
      {
        user_id: "18",
        event_id: "5",
      },
      {
        user_id: "18",
        event_id: "25",
      },
      {
        user_id: "19",
        event_id: "21",
      },
      {
        user_id: "19",
        event_id: "20",
      },
      {
        user_id: "19",
        event_id: "14",
      },
      {
        user_id: "20",
        event_id: "20",
      },
      {
        user_id: "20",
        event_id: "3",
      },
      {
        user_id: "20",
        event_id: "4",
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
