const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Status = db.define("status", {
  name: Sequelize.STRING,
});

module.exports = Status;
