const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Instructure = db.define("instructure", {
  name: Sequelize.STRING,
  bio: Sequelize.STRING,
  picture: Sequelize.STRING,
});

module.exports = Instructure;
