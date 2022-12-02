const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Article_comment = db.define("article_comment", {
  user_id: Sequelize.INTEGER,
  article_id: Sequelize.INTEGER,
  comment: Sequelize.STRING,
});

module.exports = Article_comment;
