const panels = document.querySelectorAll(`.panel`);

function onMoveOpen(evt) {
  evt.target.classList.add(`open`);
  evt.target.classList.add(`open-active`);
}

function onMoveClose(evt) {
  evt.target.classList.remove(`open`);
  evt.target.classList.remove(`open-active`);
}

function onClickOpen() {
  this.classList.toggle(`open`)
  this.classList.toggle(`open-active`);
}

panels.forEach(panel => panel.addEventListener(`click`, onClickOpen));
panels.forEach(panel => panel.addEventListener(`mouseenter`, onMoveOpen));
panels.forEach(panel => panel.addEventListener(`mouseleave`, onMoveClose));
