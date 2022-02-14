let titleElm = document.querySelector('#title');
let categoryElm = document.querySelector('#category');
let form = document.querySelector('form');
let ul = document.querySelector('ul');
let cards = JSON.parse(localStorage.getItem('cards')) || [];

function handleSumbit(event) {
  event.preventDefault();
  let title = event.target.elements.title.value;
  let category = event.target.elements.category.value;
  cards.push({ title, category });
  localStorage.setItem('cards', JSON.stringify(cards));
  createUI(cards, ul);
}

function edit(event, info, id, label) {
  let elm = event.target;
  let input = document.createElement('input');
  input.value = info;
  input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      let updatedValue = e.target.value;
      cards[id][label] = updatedValue;
      createUI();
      localStorage.setItem('cards', JSON.stringify(cards));
    }
  });
  input.addEventListener('blur', (e) => {
    let updatedValue = e.target.value;
    cards[id][label] = updatedValue;
    createUI();
    localStorage.setItem('cards', JSON.stringify(cards));
  });
  let parent = event.target.parentElement;
  parent.replaceChild(input, elm);
}
function createUI(data = cards, root = ul) {
  root.innerText = '';
  let fragment = new DocumentFragment();
  data.forEach((cardInfo, index) => {
    let li = document.createElement('li');
    li.classList.add('card');
    let span = document.createElement('span');
    span.innerText = cardInfo.category;
    span.addEventListener('dblclick', (event) =>
      edit(event, cardInfo.category, index, 'category')
    );
    let strong = document.createElement('strong');
    strong.innerText = cardInfo.title;
    strong.addEventListener('dblclick', (event) =>
      edit(event, cardInfo.title, index, 'title')
    );
    li.append(span, strong);
    fragment.appendChild(li);
  });
  root.append(fragment);
}

createUI(cards, ul);

form.addEventListener('submit', handleSumbit);
