const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const { DB_URI } = process.env;

// connect to remote db
const db = new Sequelize(DB_URI, {
  define: {
    timestamps: true,
  },
});

module.exports = db;
