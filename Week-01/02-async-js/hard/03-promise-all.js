// Function that returns a promise that resolves after a given number of seconds
function resolveAfterSeconds(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${seconds} seconds`);
    }, seconds * 1000);
  });
}

// Functions that return promises resolving after 1, 2, and 3 seconds
function promiseAfter1Second() {
  return resolveAfterSeconds(1);
}

function promiseAfter2Seconds() {
  return resolveAfterSeconds(2);
}

function promiseAfter3Seconds() {
  return resolveAfterSeconds(3);
}

// Function that waits for all 3 promises to resolve using Promise.all
function waitForAllPromises() {
  const start = Date.now();

  Promise.all([
    promiseAfter1Second(),
    promiseAfter2Seconds(),
    promiseAfter3Seconds(),
  ])
    .then((results) => {
      const end = Date.now();
      const duration = (end - start) / 1000; // Calculate duration in seconds
      console.log("All promises resolved:", results);
      console.log(
        `Time taken for all promises to resolve: ${duration} seconds`,
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Call the function to wait for all promises
waitForAllPromises();
