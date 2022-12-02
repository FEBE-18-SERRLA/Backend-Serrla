const Sequelize = require("sequelize");
const db = require("../config/db.config");
const Question = require("./question");

const Test = db.define("test", {
  course_id: Sequelize.INTEGER,
  description: Sequelize.TEXT,
});

Test.hasMany(Question, { foreignKey: "test_id" });
// Test.belongsTo(Question, { foreignKey: "question_id" });

module.exports = Test;
