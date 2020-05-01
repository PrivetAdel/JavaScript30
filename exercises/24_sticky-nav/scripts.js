const nav = document.querySelector(`.main-nav`);
let topOfNav = nav.offsetTop;

function fixNav() {
  window.scrollY > topOfNav ? document.body.classList.add(`fixed-nav`) :  document.body.classList.remove(`fixed-nav`);
}

window.addEventListener(`scroll`, fixNav);
