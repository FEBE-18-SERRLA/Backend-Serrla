const Sequelize = require("sequelize");
const db = require("../config/db.config");
const School = require("./school");

const User = db.define("user", {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    isEmail: true,
  },
  password: Sequelize.STRING,
  birthdate: Sequelize.DATEONLY,
  telp: Sequelize.BIGINT,
  picture: Sequelize.STRING,
  school_id: Sequelize.INTEGER,
  role_id: Sequelize.INTEGER,
});
User.hasOne(School, { foreignKey: "id" });
User.belongsTo(School, { foreignKey: "school_id" });
module.exports = User;
