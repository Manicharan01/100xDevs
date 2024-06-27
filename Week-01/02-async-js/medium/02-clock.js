function startTime() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  time = hours + ":" + minutes + ":" + seconds;
  console.clear();
  console.log(time);
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

startTime();
