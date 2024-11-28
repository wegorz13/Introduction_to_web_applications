let time_then;
let time_now = null;
let time_stopped = null;
let time_passed = 0;
let interval_id;
let on_off = false;
const time_display = document.getElementById("timer");
const start_btn = document.getElementById("start_btn");
const stop_btn = document.getElementById("stop_btn");
const reset_btn = document.getElementById("reset_btn");

function countTime() {
  time_now = Date.now();
  let time_to_display = time_now - time_then - time_passed;
  time_to_display = formatTime(time_to_display);
  time_display.innerHTML = time_to_display;
}

function formatTime(time) {
  let seconds = Math.floor(time / 1000);
  let minutes = Math.floor(seconds / 60);
  let r_seconds = seconds - minutes * 60;

  if (minutes > 0) {
    return minutes + "min " + r_seconds + "s";
  } else {
    return r_seconds + "s";
  }
}
start_btn.addEventListener("click", (e) => {
  if (!on_off) {
    if (time_now == null) {
      time_then = Date.now();
    } else {
      time_passed = Date.now() - time_stopped + time_passed;
    }
    countTime();
    interval_id = setInterval(countTime, 1000);
    on_off = true;
  }
});

stop_btn.addEventListener("click", (e) => {
  if (on_off) {
    time_stopped = Date.now();
    clearInterval(interval_id);
    on_off = false;
  }
});

reset_btn.addEventListener("click", (e) => {
  clearInterval(interval_id);
  on_off = false;
  time_display.innerHTML = "-- --";
  time_now = null;
  time_stopped = null;
});
