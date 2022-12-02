const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Like = db.define("like", {
  user_id: Sequelize.INTEGER,
  article_id: Sequelize.INTEGER,
});

module.exports = Like;
