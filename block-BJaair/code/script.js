let titleElm = document.querySelector('#title');
let categoryElm = document.querySelector('#category');
let form = document.querySelector('form');
let root = document.querySelector('ul');
let span = document.querySelector('span');
let strong = document.querySelector('strong');

function handleSumbit(event) {
  event.preventDefault();
  let userCard = document.createElement('li');
  userCard.classList.add('card');
  let span = document.createElement('span');
  span.innerText = categoryElm.value;
  let strong = document.createElement('strong');
  strong.innerText = titleElm.value;
  userCard.append(span, strong);
  root.append(userCard);
  titleElm.value = '';
  categoryElm.value = '';
}

form.addEventListener('submit', handleSumbit);
