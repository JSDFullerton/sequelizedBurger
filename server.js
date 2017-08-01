// REQUIRED NPM PACKAGES
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");
var PORT = process.env.PORT || 8080;
// ACTIVATE EXPRESS
var app = express();

// PORT FOR HEROKU


// SERVE STATIC CONTENT TO APP FROM "PUBLIC" DIR
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// OVERRIDE w/ POST - ?_method=DELETE
app.use(methodOverride("_method"));

// EXPRESS APP - handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTE FILES & GIVE SERVER ACCESS- HTML & API
app.use("/", routes);


// ACTIVATE HANDLEBARS
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// ACTIVATE SERVER LISTENING FUNC
app.listen(PORT, function() {

  console.log("APP IS LISTENING ON: " + PORT);

});// close app listen func