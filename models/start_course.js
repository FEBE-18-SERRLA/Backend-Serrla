const Sequelize = require("sequelize");
const db = require("../config/db.config");
const Course = require("./course");
const User = require("./user");

const Start_Course = db.define("start_course", {
  user_id: Sequelize.INTEGER,
  course_id: Sequelize.INTEGER,
  status_id: Sequelize.INTEGER,
});

Start_Course.hasOne(User, { foreignKey: "id" });
Start_Course.belongsTo(User, { foreignKey: "user_id" });

Start_Course.hasOne(Course, { foreignKey: "id" });
Start_Course.belongsTo(Course, { foreignKey: "course_id" });

module.exports = Start_Course;
