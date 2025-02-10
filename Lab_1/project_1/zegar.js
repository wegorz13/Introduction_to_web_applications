function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = formatTime(h);
  m = formatTime(m);
  s = formatTime(s);
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function formatTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
