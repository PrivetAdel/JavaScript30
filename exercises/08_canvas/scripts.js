const canvas = document.querySelector(`#canvas`);
const ctx = canvas.getContext(`2d`);

ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 300;
let color = true;
let thickness = true;

function draw(evt) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsla(${hue}, 100%, 50%, 1)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(evt.offsetX, evt.offsetY);
  ctx.stroke();
  [lastX, lastY] = [evt.offsetX, evt.offsetY];

  if (hue >= 340 || hue <= 250) {
    color = !color;
  }
  color ? hue++ : hue--;

  if (ctx.lineWidth >= 10 || ctx.lineWidth <= 1) {
    thickness = !thickness;
  }
  thickness ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener(`mousedown`, (evt) => {
  isDrawing = true;
  [lastX, lastY] = [evt.offsetX, evt.offsetY];
});

canvas.addEventListener(`mousemove`, draw);
canvas.addEventListener(`mouseup`, () => isDrawing = false);
canvas.addEventListener(`mouseout`, () => isDrawing = false);
