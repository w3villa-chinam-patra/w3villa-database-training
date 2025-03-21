const Sequelize = require("sequelize");

const sequelize = new Sequelize("store", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
