const Track = require("./track");
const Module = require("./module");
const Test = require("./test");
const Sequelize = require("sequelize");
const db = require("../config/db.config");
const Instructure = require("./instructure");

const Course = db.define("course", {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  image: Sequelize.STRING,
  track_id: Sequelize.INTEGER,
  instructure_id: Sequelize.INTEGER,
  exp_point: Sequelize.INTEGER,
});

Course.hasOne(Track, { foreignKey: "id" });
Course.belongsTo(Track, { foreignKey: "track_id" });

Course.hasOne(Instructure, { foreignKey: "id" });
Course.belongsTo(Instructure, { foreignKey: "instructure_id" });

Course.hasMany(Module, { foreignKey: "course_id" });

Course.hasMany(Test, { foreignKey: "course_id" });

module.exports = Course;
