const Sequelize = require("sequelize");
const db = require("../config/db.config");

const Testimoni = db.define("testimoni", {
  user_id: Sequelize.INTEGER,
  testimoni: Sequelize.TEXT,
});

module.exports = Testimoni;
