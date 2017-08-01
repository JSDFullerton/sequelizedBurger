// REQUIRED EXT FILES & PACKAGES
var express = require("express");
var router = express.Router();

// IMPORT model (burger.js) to use in func
var burgerDB = require("../models");


// CREATE API ROUTES

	// DISPLAY ALL BURGERS
	router.get("/", function(req, res) {

		burgerDB.findAll({}).then(function(dbBurgers) {

			res.json(dbBurgers)
		});

	});// close Display All func


	// CREATE BURGERS
	router.post("/", function(req, res) {

		burgerDB.create({

			burger_name: req.body.text,

		})
		.then(function(dbBurgers) {

			res.json(dbBurgers)

		})// close .then func
		.catch(function(err) {

			res.json("ERROR w/ CREATE BURGER FUNC:", err);

		});// close .catch func
	});// close Create Burger func


	// UPDATE "DEVOUR" BURGERS
	router.put("/:id", function(req, res) {

		burgerDB.update({

			devoured: true,


		},
		{
			where: {
				id: req.params.id
			}
		})
		.then(function(dbBurgers) {

			res.json(dbBurgers)

		})// close .then func
		.catch(function(err) {

			res.json("ERROR w/ CREATE BURGER FUNC:", err);

		});// close .catch func
	});// close "Devour" Burger Func


	// DELTE BURGER - remove burger from devoured list
	router.delete("/:id", function(req,res) {

		burgerDB.destroy({

			where: {
				id: req.params.id
			}
		})
		.then(function(dbBurgers) {

			res.json(dbBurgers)

		});// close .then func
	});// close Delete funct




// EXPORT ROUTE FOR SERVER.js
module.exports = burgerDB;
