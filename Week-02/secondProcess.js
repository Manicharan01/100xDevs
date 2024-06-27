function logResponseBody(response) {
  console.log(response);
}

function callBackFn(result) {
  result.json().then(logResponseBody);
}

var sendObj = {
  method: "GET",
};

fetch("http://localhost:3000/sum?counter=10", sendObj).then(callBackFn);
