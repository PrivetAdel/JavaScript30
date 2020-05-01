function moveShadow(evt) {
  let x = (20 * evt.pageX / window.innerWidth) - 5,
      y = (20 * evt.pageY / window.innerHeight) - 5;

  document.documentElement.style.setProperty('--x', `${x}px`);
  document.documentElement.style.setProperty('--y', `${y}px`);
}

window.addEventListener('mousemove', moveShadow);
