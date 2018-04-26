
var path = require("path");

module.exports = function(app){
// when the user is on the server and enters basically anything into the address bar, they will be directed to the home page
app.get("/", function (req, res){
res.sendFile(path.join(__dirname, "../public/home.html"));
});

// when the user is on the url with the /survey at the end then we will serve up the survey page
app.get("/survey", function (req, res){
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("*", function (req, res){
	res.sendFile(path.join(__dirname, "../public/home.html"));
});
};