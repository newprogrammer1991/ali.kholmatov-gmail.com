const cards = document.querySelector('.cards');
function render(title, index, length) {
    const cardsItems = document.querySelector('.cards__items');
    const progress = `<p id="progress" class="progress">Progress: 0 of ${length}</p>`;
    const item = `<div id=${index} class="cards__item">
    <h5 class="cards__title">
       ${index}. ${title}
    </h5>
    </div>`
    if (cardsItems) {
        cardsItems.insertAdjacentHTML('beforeend', item);
    } else {
        cards.insertAdjacentHTML('beforeend', `
     ${progress}
    <div class="cards__items">
      ${item}
    </div>`)
    }

}


function update(id, progress, length,sentence) {
    const elem = document.getElementById(id);
    const elemProgress = document.getElementById('progress');
    elemProgress.innerText = `Progress: ${progress} of ${length}`
    elem.insertAdjacentHTML('beforeend', `
    <p class="cards__desc">${sentence}</p>
    `)
}
function clearCards() {
    cards.innerHTML = '';
}

export { clearCards, update, render }