const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Portofolio = db.define("portofolio", {
  user_id: Sequelize.INTEGER,
  media: Sequelize.STRING,
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
});

module.exports = Portofolio;
