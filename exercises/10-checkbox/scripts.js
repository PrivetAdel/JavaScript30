const checkboxes = document.querySelectorAll(`input`);

let inBetween = false;
let lastChecked;

function handleCheck(evt) {
  if (evt.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener(`click`, handleCheck));
