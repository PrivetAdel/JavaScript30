const cities = [];
fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
  .then(response => response.json())
  .then(data => cities.push(...data));

const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keyup', search);

function search() {
  let regex = new RegExp(this.value, `gi`);
  let matches = cities.filter(cityData => cityData.city.match(regex));
  displayMatches(this.value, matches);
}

function displayMatches(wordToMatch, matches) {
  let list = document.querySelector(`.search-result`);
  let regex = new RegExp(wordToMatch, 'gi');

  if (wordToMatch == ``) {
    return list.innerHTML = ``;
  }

  let listItems = matches.map(cityData => {
    let cityName = cityData.city.replace(regex, `<span class="search-highlight">${wordToMatch}</span>`);
    let stateName = cityData.state.replace(regex, `<span class="search-highlight">${wordToMatch}</span>`);
    let population = Number(cityData.population).toLocaleString();

    return `
      <li>
        <span>${cityName}, ${stateName}</span>
        <span class="population">${population}</span>
      </li>
    `;
  }).join('');

  list.innerHTML = listItems;
}
