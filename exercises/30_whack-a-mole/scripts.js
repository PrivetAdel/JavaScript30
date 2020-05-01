const start = document.querySelector(`.start`);
const holes = document.querySelectorAll(`.hole`);
const moles = document.querySelectorAll(`.mole`);
const scoreBoard = document.querySelector(`.score span`);
let playTime, interval, lastHole;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add(`up`);
  setTimeout(() => {
    hole.classList.remove(`up`);
    if (playTime > 0) peep();
  }, time);
}

function countdown() {
  const timer = document.querySelector('.timer span');

  interval = setInterval(() => {
    if (playTime < 0) {
      clearInterval(interval);
      return;
    }

    timer.textContent = playTime;
    playTime--;
  }, 1000);
}

function startGame() {
  playTime = 10;
  scoreBoard.textContent = 0;
  score = 0;
  peep();
  countdown();
}

function scorePoint(evt) {
  if(!evt.isTrusted) return;
  score++;
  this.parentNode.classList.remove(`up`);
  scoreBoard.textContent = score;
}

start.addEventListener(`click`, startGame);
moles.forEach(mole => mole.addEventListener(`click`, scorePoint));
