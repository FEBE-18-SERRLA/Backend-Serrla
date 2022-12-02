"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Modules", [
      {
        course_id: 1,
        title: "Title Modul 1",
        video: "https://www.youtube.com/watch?v=aE4f1OMZZmU",
        image: "https://rumahprivat.com/wp-content/uploads/2021/03/1-9.jpg",
        description: "Description Modul 1",
      },
      {
        course_id: 1,
        title: "Title Modul 2",
        video: "https://www.youtube.com/watch?v=TK3b47iAB_4",
        image: "https://cdn0-production-images-kly.akamaized.net/BAImU6GV6rp3a7Gs-LdVwv5LI0k=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/42632/original/obat-asma-nyanyi-130520b.jpg",
        description: "Description Modul 2",
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
