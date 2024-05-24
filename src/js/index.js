const home = document.getElementById('home');
const guest = document.getElementById('guest');
const timerElement = document.getElementById('timer');
let totalSeconds = 2880;

let timerInterval;

// eslint-disable-next-line no-unused-vars
function startTimer() {
  totalSeconds = 0;
  // eslint-disable-next-line no-use-before-define
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateTimer() {
  // eslint-disable-next-line no-plusplus
  totalSeconds++;

  if (totalSeconds > 2880) {
    clearInterval(timerInterval);
    timerElement.textContent = '00:48:00';
  } else {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // eslint-disable-next-line no-use-before-define
    const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

    timerElement.textContent = formattedTime;
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// eslint-disable-next-line no-unused-vars
function restartTimer() {
  stopTimer();
  totalSeconds = 0;
  timerElement.textContent = '00:00:00';
}

let count = 0;
let counts = 0;

// eslint-disable-next-line no-unused-vars
function addOne() {
  count += 1;
  home.textContent = count;
}
// eslint-disable-next-line no-unused-vars
function addTwo() {
  count += 2;
  home.textContent = count;
}
// eslint-disable-next-line no-unused-vars
function addThree() {
  count += 3;
  home.textContent = count;
}

// eslint-disable-next-line no-unused-vars
function plusOne() {
  counts += 1;
  guest.textContent = counts;
}
// eslint-disable-next-line no-unused-vars
function plusTwo() {
  counts += 2;
  guest.textContent = counts;
}
// eslint-disable-next-line no-unused-vars
function plusThree() {
  counts += 3;
  guest.textContent = counts;
}

// eslint-disable-next-line no-unused-vars
function newGame() {
  count = 0;
  counts = 0;
  home.textContent = count;
  guest.textContent = counts;
}
