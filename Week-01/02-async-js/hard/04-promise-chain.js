function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

function waitThreeSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

async function calculateTimeTaken() {
  let start = Date.now();
  await waitOneSecond();
  await waitTwoSeconds();
  await waitThreeSeconds();
  let end = Date.now();
  console.log("Time taken: " + (end - start) / 1000);
}

calculateTimeTaken();
