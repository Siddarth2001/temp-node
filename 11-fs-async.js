const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return -1;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return -1;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `here is the async result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return -1;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("starting a new task");
