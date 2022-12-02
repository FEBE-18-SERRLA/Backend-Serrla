const Sequelize = require("sequelize");
const db = require("../config/db.config");
const Course = require("./course");
const User = require("./user");

const Review = db.define("review", {
  user_id: Sequelize.INTEGER,
  course_id: Sequelize.INTEGER,
  star: Sequelize.INTEGER,
  review: Sequelize.TEXT,
});

Review.hasOne(User, { foreignKey: "id" });
Review.belongsTo(User, { foreignKey: "user_id" });

Review.hasOne(Course, { foreignKey: "id" });
Review.belongsTo(Course, { foreignKey: "course_id" });
module.exports = Review;
