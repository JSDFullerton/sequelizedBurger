// REQUIRED EXT FILES & PACKAGES
	
	// Standard Sequelize Library
	var SequelizeLibrary = require("sequelize");

	// Sequelize Connection to DB
	var sequelize = require("../config/connection.js");


// CREATE MODEL/TABLE THAT MATCHES DB

var burger = sequelize.define("burgers", {

	id: {
		type: SequelizeLibrary.INTEGER,
		allowNull: false,
		autoIncrement: true
	},

	burger_name: {

		type: SequelizeLibrary.STRING,
		allowNull: false,
		validate: {
			len: [1]
		}
	},
	
	devoured: {

		type: SequelizeLibrary.BOOLEAN
		allowNull: false,
		defaultValue: false
	},

	date: {
		
		type: SequelizeLibrary.DATE
	}



});// close burger var


// Sync w/ DB
burger.sync();


// EXPORT Database ORM functions for controller JS File
module.exports = burger;
