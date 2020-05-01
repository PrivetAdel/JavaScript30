const sliderSections = document.querySelectorAll(`.section`);

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    let context = this;
    let args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.applay(context, args);
    }
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


function checkSlide() {
  sliderSections.forEach(sliderSection => {
    const slideInAt = (window.scrollY + window.innerHeight) - sliderSection.offsetHeight / 2;
    const sliderBottom = sliderSection.offsetTop + sliderSection.offsetHeight;

    const isHalfShown = slideInAt > sliderSection.offsetTop;
    const isNotScrolledPast = window.scrollY < sliderBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderSection.classList.add(`active`);
    } else {
      sliderSection.classList.remove(`active`);
    }
  });
}

window.addEventListener(`scroll`, debounce(checkSlide));
