const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Start_Test = db.define("start_test", {
  user_id: Sequelize.INTEGER,
  test_id: Sequelize.INTEGER,
  score: Sequelize.INTEGER,
});

module.exports = Start_Test;
