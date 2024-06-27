const express = require("express");
const bodyParser = require("body-parser");
const anagram = require("../Week-01/01-js/easy/anagram");
const palindrome = require("../Week-01/01-js/medium/palindrome");
const app = express();
const port = 3000;

app.use(bodyParser.json());

function calculateSum(counter) {
  let sum = 0;
  for (let i = 1; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function calculateMul(counter) {
  let mul = 1;
  for (let i = 1; i <= counter; i++) {
    mul *= i;
  }
  return mul;
}

//function middleware(req, res, next) {
//  console.log("Middleware is working");
//  next();
//}

//app.use(middleware);

function handleFirstRequest(req, res) {
  var counter = req.query.counter;
  //var counter = req.headers.counter;
  //var counter = req.query.counter;
  var calculatedSum = calculateSum(counter);
  var calculatedMul = calculateMul(counter);
  var answerObject = {
    sum: calculatedSum,
    mul: calculatedMul,
  };
  res.send(answerObject);
}

function givePage(req, res) {
  res.sendFile(__dirname + "/index.html");
}

function handleSecondRequest(req, res) {
  var str1 = req.body.str1;
  var str2 = req.body.str2;
  var answer = anagram(str1, str2);
  if (answer) {
    res.send("The Given Strings are Anagrams");
  } else {
    res.send("The Given Strings are not Anagrams");
  }
}

function handleThirdRequest(req, res) {
  var str3 = req.body.str3;
  var answer = palindrome(str3);
  if (answer) {
    res.send("The Given String is a Palindrome");
  } else {
    res.send("The Given String is not a Palindrome");
  }
}

//app.get("/sum", handleFirstRequest);
app.get("/", givePage);
app.get("/sum", handleFirstRequest);
app.post("/isanagram", handleSecondRequest);
app.post("/ispalindrome", handleThirdRequest);

function started() {
  console.log(`Server started at http://localhost:${port}`);
}

app.listen(port, started);
