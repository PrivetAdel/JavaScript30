const speed = document.querySelector(`.wrap`);
const speedBar = speed.querySelector(`.speed-bar`);
const speedNumber = document.querySelector(`.speed-number`);
const video = document.querySelector(`.video`);
let isMouseDown = false;

function handleMove(evt) {
  if (!isMouseDown) return;
  const y = evt.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + `%`;
  const playbackRate = percent * (max - min) + min;
  speedBar.style.height = height;
  speedNumber.textContent = playbackRate.toFixed(2) + `×`;
  video.playbackRate = playbackRate;
}

speedBar.addEventListener(`mousemove`, handleMove);
speedBar.addEventListener(`mousedown`, () =>   isMouseDown = true);
speedBar.addEventListener(`mouseup`, () => isMouseDown = false);

speed.addEventListener(`mousemove`, handleMove);
speed.addEventListener(`mousedown`, () =>   isMouseDown = true);
speed.addEventListener(`mouseup`, () => isMouseDown = false);
speed.addEventListener(`mouseleave`, () => isMouseDown = false);
