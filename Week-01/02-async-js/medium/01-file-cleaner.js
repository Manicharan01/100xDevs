const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  string = data.replace(/\s+/g, " ");
  console.log(string);

  fs.writeFile("data.txt", string, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File written successfully");
  });
});
