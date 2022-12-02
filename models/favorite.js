const Sequelize = require("sequelize");
const db = require("../config/db.config");
const Event = require("./event");
const User = require("./user");

const Favorite = db.define("favorite", {
  user_id: Sequelize.INTEGER,
  event_id: Sequelize.INTEGER,
});

Favorite.hasOne(Event, { foreignKey: "id" });
Favorite.belongsTo(Event, { foreignKey: "event_id" });

Favorite.hasOne(User, { foreignKey: "id" });
Favorite.belongsTo(User, { foreignKey: "user_id" });

module.exports = Favorite;
