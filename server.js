// import the routing and Node Modules
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");


// save the import action in a variable
var app = express();
// save the port in a variable?
var PORT = 3000;

// allows us to use the public folders in the server
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// imports the routing files and pass in the route info/app portion
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


// starts the server to listen for input from the website
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



