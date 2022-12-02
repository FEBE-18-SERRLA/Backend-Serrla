"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Questions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      test_id: {
        type: Sequelize.INTEGER,
      },
      question: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      a: {
        type: Sequelize.STRING,
      },
      b: {
        type: Sequelize.STRING,
      },
      c: {
        type: Sequelize.STRING,
      },
      d: {
        type: Sequelize.STRING,
      },
      answer_key: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Questions");
  },
};
