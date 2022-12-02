const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Question = db.define("question", {
  test_id: Sequelize.INTEGER,
  question: Sequelize.STRING,
  image: Sequelize.STRING,
  a: Sequelize.STRING,
  b: Sequelize.STRING,
  c: Sequelize.STRING,
  d: Sequelize.STRING,
  answer_key: Sequelize.STRING,
});

module.exports = Question;
