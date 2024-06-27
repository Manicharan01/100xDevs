const anagram = require("../Week-01/01-js/easy/anagram");
const palindrome = require("../Week-01/01-js/medium/palindrome");
const express = require("express");
const app = express();
const port = 3000;

function calculateSum(counter) {
  let sum = 0;
  for (let i = 1; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function handleFirstRequest(req, res) {
  var counter = req.query.counter;
  var calculatedSum = calculateSum(counter);
  var answer = "The sum of the first 100 numbers is " + calculatedSum;
  res.send(answer);
}

function handleSecondRequest(req, res) {
  var str1 = req.query.str1;
  var str2 = req.query.str2;
  var answer = anagram(str1, str2);
  if (answer) {
    res.send("The Given Strings are Anagrams");
  } else {
    res.send("The Given Strings are not Anagrams");
  }
}

function handleThirdRequest(req, res) {
  var str1 = req.query.str1;
  var answer = palindrome(str1);
  if (answer) {
    res.send("The Given String is a Palindrome");
  } else {
    res.send("The Given String is not a Palindrome");
  }
}

app.get("/sum", handleFirstRequest);
app.get("/isanagram", handleSecondRequest);
app.get("/ispalindrome", handleThirdRequest);

function started() {
  console.log(`Server started at http://localhost:${port}`);
}

app.listen(port, started);
