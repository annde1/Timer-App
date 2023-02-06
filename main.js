const countdown = document.querySelector(".time");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btnReset = document.getElementById("reset");

let timer;
let time = 0;

const tic = function () {
  const hours = String(Math.trunc(time / 3600)).padStart(2, 0);
  const minutes = String(Math.trunc(time / 60)).padStart(2, 0);
  const seconds = String(time % 60).padStart(2, 0);
  countdown.textContent = `${hours}:${minutes}:${seconds}`;

  time++;
};

btnStart.addEventListener("click", function () {
  tic();
  timer = setInterval(tic, 1000);
});

btnReset.addEventListener("click", function () {
  clearInterval(timer);
  time = 0;
  countdown.textContent = `00:00:00`;
});

btnStop.addEventListener("click", function () {
  clearInterval(timer);
});
