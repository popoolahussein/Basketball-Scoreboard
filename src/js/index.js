const home = document.getElementById('home');
const guest = document.getElementById('guest');
const timerElement = document.getElementById('timer');
let totalSeconds = 0;
let timerInterval = null;

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function updateTimer() {
  totalSeconds += 1;

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  if (totalSeconds >= 2880) {
    stopTimer();
    timerElement.textContent = '00:48:00';
  } else {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

    timerElement.textContent = formattedTime;
  }
}

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function restartTimer() {
  stopTimer();
  totalSeconds = 0;
  timerElement.textContent = '00:00:00';
  startTimer();
}

let homeScore = 0;
let guestScore = 0;

function addOne() {
  homeScore += 1;
  home.textContent = homeScore;
}

function addTwo() {
  homeScore += 2;
  home.textContent = homeScore;
}

function addThree() {
  homeScore += 3;
  home.textContent = homeScore;
}

function plusOne() {
  guestScore += 1;
  guest.textContent = guestScore;
}

function plusTwo() {
  guestScore += 2;
  guest.textContent = guestScore;
}

function plusThree() {
  guestScore += 3;
  guest.textContent = guestScore;
}

function newGame() {
  homeScore = 0;
  guestScore = 0;
  home.textContent = homeScore;
  guest.textContent = guestScore;
  restartTimer();
}

window.startTimer = startTimer;
window.stopTimer = stopTimer;
window.restartTimer = restartTimer;
window.addOne = addOne;
window.addTwo = addTwo;
window.addThree = addThree;
window.plusOne = plusOne;
window.plusTwo = plusTwo;
window.plusThree = plusThree;
window.newGame = newGame;
