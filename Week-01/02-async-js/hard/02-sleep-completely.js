function sleep(ms) {
  const start = Date.now();
  console.log("Sleeping for " + ms + "ms");
  while (Date.now() < start + ms);
  console.log("Awake");
}

let promise = new Promise((resolve) => {
  let n = Math.floor(Math.random() * 11);
  sleep(n * 1000);
  resolve(n);
});

promise.then(function (value) {
  console.log(value);
});
