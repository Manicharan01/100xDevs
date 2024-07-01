function getTasks() {
  fetch("http://localhost:3000/todos", {
    method: "GET",
  }).then((result) => {
    result.json().then((text) => {
      console.log(text);
    });
  });
}

function addTask() {
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  fetch("http://localhost:3000/todos", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      description: description,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((result) => {
    result.json().then((text) => {
      console.log(text);
    });
  });
}
