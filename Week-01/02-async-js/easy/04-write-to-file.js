const fs = require("fs");

fs.writeFile("data.txt", "\nHow are you?", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File written successfully");
});
