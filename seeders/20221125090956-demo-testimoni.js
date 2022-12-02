"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Testimonis", [
      {
        user_id: 6,
        testimoni: "Awalnya ikutin Anye kelas belajart cuma iseng aja, biar dia gak gabut 😂, tapi ternyata cara kak Dudi ngajar bikin Anye ketagihan. Seru, super sabar dan master of art bgt emang! ❤️💜",
      },
      {
        user_id: 7,
        testimoni: "Di belajart ga cuma sekadar belajar gambar aja, tapi juga selalu diawali dengan sesi cerita.. Ilmunya jadi dobel shayyy.. kisah senimannya dpt, gambarnya juga dpt. Juwarak 🏆",
      },
      {
        user_id: 8,
        testimoni: "Setelah 1x ikut, Anye langsung bilang : 'apapun tema gambarnya, aku selalu mau ikut kelas kak Dudi ya maaa' WOW SEJATUHCINTA ITUHH.. makanya sampe sekarang setiap Kamis adalah hari kelas kak Dudi.",
      },
      {
        user_id: 9,
        testimoni: "Semoga kak Dudi sehat terus, jadi bisa selalu ketemu dengan Anye dll di setiap Kamis. Terima kasih banyak atas ilmu dan kesabarannya.",
      },
      {
        user_id: 10,
        testimoni: "Ikut belajart udah paling bener",
      },
      {
        user_id: 11,
        testimoni: "Menurutku, Belajart adalah kelas yang menambah wawasanku dalam hal seni, aku bisa lebih meningkatkan skill gambarku, aku juga bisa bertemu teman baru, kelasnya seru",
      },
      {
        user_id: 12,
        testimoni: "Belajar art sama Kak Dudi itu rasanya seru sekaligus adem. Saya lihat Abi (12th) sangat menikmati proses menggambar di kelas ini. Dan Abi makin terpancing untuk menggambar apapun.",
      },
      {
        user_id: 13,
        testimoni: "Lucunya lagi, Anin adiknya (6th), jadi tertarik untuk ikut menggambar. Terima kasih banyak ya Kak Dudi sudah berbagi ilmu sepenuh hati. Tuhan memberkati. 🙏",
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
