let countdown;
const timerDisplay = document.querySelector(`.display__time-left`);
const endTime = document.querySelector(`.display__end-time`);
const buttons = document.querySelectorAll(`[data-time]`);

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + (seconds * 1000);
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft === 0) {
      const audio = document.querySelector(`audio`);
      audio.play();
    }
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);

  timerDisplay.textContent = `00:00:00`;
}

function displayTimeLeft(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - (hours * 3600)) / 60);
  const remainderSeconds = seconds % 60;
  const display = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(remainderSeconds)}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  const secs = end.getSeconds();
  endTime.textContent = `${formatTime(hour)}:${formatTime(minutes)}:${formatTime(secs)}`;
}

function formatTime(time) {
  return `${time < 10 ? '0' : ''}${time}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener(`click`, startTimer));
document.customForm.addEventListener(`submit`, function(evt) {
  evt.preventDefault();
  const mins = this.minutes.value;
  if (mins > 60) {

  }
  timer(mins * 60);
  this.reset();
});
