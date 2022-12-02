const Sequelize = require("sequelize");
const db = require("../config/db.config");
const Topic = require("./topic");
const User = require("./user");

const Article = db.define("article", {
  user_id: Sequelize.INTEGER,
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  topic_id: Sequelize.INTEGER,
});

Article.hasOne(User, { foreignKey: "id" });
Article.belongsTo(User, { foreignKey: "user_id" });

Article.hasOne(Topic, { foreignKey: "id" });
Article.belongsTo(Topic, { foreignKey: "topic_id" });
module.exports = Article;
