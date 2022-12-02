const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Topic = db.define("topic", {
  name: Sequelize.STRING,
});

module.exports = Topic;
