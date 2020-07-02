var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

let dogs = [
  { "name": "shero", "breed": "poodle" },
  { "name": "mark", "breed": "german shepherd" },
  { "name": "ollie", "breed": "lab" },
  { "name": "ollie", "breed": "lab" },
  { "name": "ollie", "breed": "lab" }
]

app.get("/", function(req, res, next) {
  res.render("index");
})

app.get("/dogs", function(req, res) {
  res.render("dogs", { dogs: dogs });
})

app.get("/add", function(req, res) {
  res.render("add");
})

app.post("/add", function(req, res) {
  let dogDetails = {
     name : req.body.dogname,
     breed : req.body.dogbreed
  }
  dogs.push(dogDetails);
  res.redirect("/dogs");
})

let port = (process.env.PORT || '3005');

app.listen(port ,process.env.IP,  function () {
  console.log(' Server Running on port 3005');
});