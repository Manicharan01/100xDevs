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

app.get("/sum", handleFirstRequest);

function started() {
  console.log(`Server started at http://localhost:${port}`);
}

app.listen(port, started);
