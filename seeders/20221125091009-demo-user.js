"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        first_name: "Marselinus",
        last_name: "Setyawan",
        email: "marselinus@gmail.com",
        password: "marselinus12345",
        role_id: 2,
      },
      {
        first_name: "Rovinda",
        last_name: "Putra",
        email: "rovinda@gmail.com",
        password: "rovinda12345",
        role_id: 2,
      },
      {
        first_name: "Nola",
        last_name: "Farah",
        email: "nola@gmail.com",
        password: "nola12345",
        role_id: 2,
      },
      {
        first_name: "Ibnu",
        last_name: "Choldun",
        email: "ibnu@gmail.com",
        password: "ibnu12345",
        role_id: 2,
      },
      {
        first_name: "Rafid",
        last_name: "Ammar",
        email: "rafid@gmail.com",
        password: "rafid12345",
        role_id: 2,
      },
      {
        "first_name": "firstname1",
        "last_name": "lastname1",
        "email": "firstname1@gmail.com",
        "password": "firstname112345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/1.-Elizabeth-Christina.png",
        "school_id": 1,
        "role_id": 1
      },
      {
        "first_name": "firstname2",
        "last_name": "lastname2",
        "email": "firstname2@gmail.com",
        "password": "firstname212345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/2.-Jennifer-Bachdim.jpg",
        "school_id": 1,
        "role_id": 1
      },
      {
        "first_name": "firstname3",
        "last_name": "lastname3",
        "email": "firstname3@gmail.com",
        "password": "firstname312345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/3.-Aulion.png",
        "school_id": 1,
        "role_id": 1
      },
      {
        "first_name": "firstname4",
        "last_name": "lastname4",
        "email": "firstname4@gmail.com",
        "password": "firstname412345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/4.-Jerome-Polin.png",
        "school_id": 1,
        "role_id": 1
      },
      {
        "first_name": "firstname5",
        "last_name": "lastname5",
        "email": "firstname5@gmail.com",
        "password": "firstname512345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/5.-Bintang-Emon.png",
        "school_id": 1,
        "role_id": 1
      },
      {
        "first_name": "firstname6",
        "last_name": "lastname6",
        "email": "firstname6@gmail.com",
        "password": "firstname612345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/6.-Kristo-Immanuel.png",
        "school_id": 2,
        "role_id": 1
      },
      {
        "first_name": "firstname7",
        "last_name": "lastname7",
        "email": "firstname7@gmail.com",
        "password": "firstname712345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/7.-Tasya-Farasya.png",
        "school_id": 2,
        "role_id": 1
      },
      {
        "first_name": "firstname8",
        "last_name": "lastname8",
        "email": "firstname8@gmail.com",
        "password": "firstname812345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/8.-Keanu.png",
        "school_id": 2,
        "role_id": 1
      },
      {
        "first_name": "firstname9",
        "last_name": "lastname9",
        "email": "firstname9@gmail.com",
        "password": "firstname912345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/9.-Rachel-Vennya.png",
        "school_id": 2,
        "role_id": 1
      },
      {
        "first_name": "firstname10",
        "last_name": "lastname10",
        "email": "firstname10@gmail.com",
        "password": "firstname1012345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/10.-Dara-Arafah.png",
        "school_id": 2,
        "role_id": 1
      },
      {
        "first_name": "firstname11",
        "last_name": "lastname11",
        "email": "firstname11@gmail.com",
        "password": "firstname1112345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/11.-Anya-Geraldine.png",
        "school_id": 3,
        "role_id": 1
      },
      {
        "first_name": "firstname12",
        "last_name": "lastname12",
        "email": "firstname12@gmail.com",
        "password": "firstname1212345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/12.-Rizky-Febian.png",
        "school_id": 3,
        "role_id": 1
      },
      {
        "first_name": "firstname13",
        "last_name": "lastname13",
        "email": "firstname13@gmail.com",
        "password": "firstname1312345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/13.-Fiersa-Besari.png",
        "school_id": 3,
        "role_id": 1
      },
      {
        "first_name": "firstname14",
        "last_name": "lastname14",
        "email": "firstname14@gmail.com",
        "password": "firstname1412345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/14.-Iqbaal-Ramadhan.png",
        "school_id": 3,
        "role_id": 1
      },
      {
        "first_name": "firstname15",
        "last_name": "lastname15",
        "email": "firstname15@gmail.com",
        "password": "firstname1512345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/15.-Jefri-Nichol.png",
        "school_id": 3,
        "role_id": 1
      },
      {
        "first_name": "firstname16",
        "last_name": "lastname16",
        "email": "firstname16@gmail.com",
        "password": "firstname1612345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/16.-Gofar-Hilman.png",
        "school_id": 4,
        "role_id": 1
      },
      {
        "first_name": "firstname17",
        "last_name": "lastname17",
        "email": "firstname17@gmail.com",
        "password": "firstname1712345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/17.-dr.-Tirta.png",
        "school_id": 4,
        "role_id": 1
      },
      {
        "first_name": "firstname18",
        "last_name": "lastname18",
        "email": "firstname18@gmail.com",
        "password": "firstname1812345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/18.-Onadio-Leonardo.png",
        "school_id": 4,
        "role_id": 1
      },
      {
        "first_name": "firstname19",
        "last_name": "lastname19",
        "email": "firstname19@gmail.com",
        "password": "firstname1912345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/19.-Aure%C2%B4lie-Moeremans.png",
        "school_id": 4,
        "role_id": 1
      },
      {
        "first_name": "firstname20",
        "last_name": "lastname20",
        "email": "firstname20@gmail.com",
        "password": "firstname2012345",
        "picture": "https://starngage.com/wp-content/uploads/2021/03/20.-Danilla-Riyadi.png",
        "school_id": 4,
        "role_id": 1
      }
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
