const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

var num = 0;
for (let i = 0; i < 1000000000; i++) {
  num += i;
}

console.log(num);
