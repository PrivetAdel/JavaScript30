function removeTransition (evt) {
  if(evt.propertyName !== `transform`) return;
  evt.target.classList.remove(`playing`);
}

function onButtonDown (evt) {
  const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  const key = document.querySelector(`button[data-key="${evt.keyCode}"]`);
  if (!audio) return;
  key.classList.add(`playing`);
  audio.currentTime = 0;
  audio.play();
}

const buttons = document.querySelectorAll(`button`);
for (let i = 0; i < buttons.length; i++) {
  (function (button) {
    button.addEventListener(`click`, function (evt) {
      const audio = document.querySelector(`audio[data-key="${button.dataset.key}"]`);
      button.classList.add(`playing`);
      audio.currentTime = 0;
      audio.play();
    });
  })(buttons[i]);
}

const keys = Array.from(document.querySelectorAll(`.key`));
keys.forEach(key => key.addEventListener(`transitionend`, removeTransition));
window.addEventListener(`keydown`, onButtonDown);
