// REQUIRED PACKAGES & DEPENDENCIES
var SequelizeLibrary = require("sequelize");

// CREATE MySQL CONNECTION w/ Sequelize
var sequelize = new SequelizeLibrary("burger_db", "root", "", {

  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});// close var sequelize



// EXPLORT SQL CONNECTION for ORM USE
module.exports = connection;

