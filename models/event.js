const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Event = db.define("event", {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  image: Sequelize.STRING,
  date: Sequelize.DATEONLY,
  time: Sequelize.STRING,
  location: Sequelize.STRING,
  loc_url: Sequelize.STRING,
  price: Sequelize.INTEGER,
});

module.exports = Event;
