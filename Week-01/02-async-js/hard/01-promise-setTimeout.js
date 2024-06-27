function wait(n) {
  console.log(n);
}

let promise = new Promise((resolve) => {
  let n = Math.floor(Math.random() * 11);
  setTimeout(function () {
    resolve(n);
  }, n * 1000);
});

promise.then(function (value) {
  wait(value);
});
