const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');

let timer = 0;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startButton.addEventListener("click", changeStartBG);
stopButton.addEventListener("click", changeStopBG);

function changeStartBG() {
  document.body.style.background =
    colors[randomIntegerFromInterval(0, colors.length)];
  // timer = timer < colors.length ? ++timer : 0;
  //document.querySelector("body").style.background = colors[timer];
}

function onStartBtn() {
  stopButton.removeAttribute("disabled");
  startButton.setAttribute("disabled", true);
  timer = setInterval(changeStartBG, 1000);
}

function changeStopBG() {
  startButton.removeAttribute("disabled");
  stopButton.setAttribute("disabled", true);

  clearInterval(timer);
}
