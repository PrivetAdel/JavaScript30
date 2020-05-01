const picture = document.querySelector(`img`);
const pressed = [];
const secretCode = `banana`;

function detectKeySequence(evt) {
  pressed.push(evt.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  let isMatch = pressed.join(``) === secretCode;
  isMatch && picture.classList.add(`show`);
}

window.addEventListener(`keyup`, detectKeySequence);
