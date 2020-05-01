const form = document.querySelector(`.add-items`);
const list = document.querySelector(`.list`);
const items = JSON.parse(localStorage.getItem(`items`)) || [];

function addItem(evt) {
  evt.preventDefault();
  const text = this.querySelector(`[name="add-item"]`).value;
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, list);
  localStorage.setItem(`items`, JSON.stringify(items));
  this.reset();
}

function populateList(list = [], toDoList) {
  toDoList.innerHTML = list.map((point, i) => {
    return `
      <li data-index=${i}>
        <input type="checkbox" data-index=${i} id="item${i}" ${point.done ? 'checked' : ''}>
        <label for="item${i}">${point.text}</label>
        <input data-index=${i} type="button" class="remove-item">
      </li>
    `;
  }).join(``);
}

function toggleDone(evt) {
  if (!evt.target.matches(`input[type="checkbox"]`)) return;
  const el = evt.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem(`items`, JSON.stringify(items));
  populateList(items, list);
}

function removeItem(evt) {
  const el = evt.target;
  const index = el.dataset.index;
  items.splice(index, 1);
  localStorage.setItem(`items`, JSON.stringify(items));
  populateList(items, list);
}

form.addEventListener(`submit`, addItem);
list.addEventListener(`click`, toggleDone);

populateList(items, list);

function deleteItem(evt) {
  if(!evt.target.matches(`input[type="button"]`)) return;
    if (list.children) {
      const removeBtns = list.querySelectorAll(`input[type="button"]`);
      removeBtns.forEach(removeBtn => {
        removeBtn.addEventListener(`click`, removeItem);
      });
    }
}

document.addEventListener(`click`, deleteItem);
