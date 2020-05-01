const slider = document.querySelector(`.slider`);
let isMouseDown = false;
let startX;

function handleMouseDown(evt) {
  isMouseDown = true;
  startX = evt.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

function handleScroll(evt) {
  if (!isMouseDown) return;
  evt.preventDefault();

  let currPosX = evt.pageX - slider.offsetLeft,
      scrollX = (currPosX - startX) * 2;

  this.scrollLeft -= scrollX;
  startX = currPosX;
}

slider.addEventListener('mousemove', handleScroll);
slider.addEventListener('mousedown', handleMouseDown);
slider.addEventListener('mouseup', () => isMouseDown = false);
slider.addEventListener('mouseleave', () => isMouseDown = false);
