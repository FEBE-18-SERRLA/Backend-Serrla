const Sequelize = require("sequelize");
const db = require("../config/db.config");
const Question = require("./question");

const Track = db.define("track", {
  name: Sequelize.STRING,
});

module.exports = Track;
