const Sequelize = require("sequelize");
const db = require("../config/db.config");
const User = require("./user");

const School = db.define("school", {
  npsn: Sequelize.INTEGER,
  name: Sequelize.STRING,
  address: Sequelize.STRING,
  telp: Sequelize.STRING,
});

// School.hasMany(User, { foreignKey: "school_id" });

module.exports = School;
