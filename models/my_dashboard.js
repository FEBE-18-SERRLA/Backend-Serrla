const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Course = require("./course");
const User = require("./user");

const My_Dashboard = db.define("my_dashboard", {
  user_id: Sequelize.INTEGER,
  course_id: Sequelize.INTEGER,
});

My_Dashboard.hasOne(Course, { foreignKey: "id" });
My_Dashboard.belongsTo(Course, { foreignKey: "course_id" });

My_Dashboard.hasOne(User, { foreignKey: "id" });
My_Dashboard.belongsTo(User, { foreignKey: "user_id" });

module.exports = My_Dashboard;
