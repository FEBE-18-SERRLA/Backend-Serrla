const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Role = db.define("role", {
  name: Sequelize.STRING,
});

module.exports = Role;
