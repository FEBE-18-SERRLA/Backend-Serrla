const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Module = db.define("module", {
  course_id: Sequelize.INTEGER,
  title: Sequelize.STRING,
  video: Sequelize.STRING,
  image: Sequelize.STRING,
  description: Sequelize.TEXT,
});

module.exports = Module;
