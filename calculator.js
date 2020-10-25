const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// GET - POST for root
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var number1 = Number(req.body.num1);
    var number2 = Number(req.body.num2);
    var result = number1 + number2;
    res.send("Calculated value is " + result);
});

// GET - POST for BMI CALCULATION
app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var bmi = Math.floor(weight / (height * height));
  res.send("Your BMI is " + bmi);
});


app.listen(3000, function(){
  console.log("Server started listening on port 3000");
});
