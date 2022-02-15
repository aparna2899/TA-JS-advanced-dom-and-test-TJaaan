let input = document.querySelector('input');
let root = document.querySelector('ul');

let list = JSON.parse(localStorage.getItem('list')) || [];

function handleDragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e, arr) {
  this.style.opacity = '1';
  listItems.forEach(function (item) {
    item.classList.remove('over');
  });
}
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  return false;
}
function handleDragEnter(e) {
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');
}
function handleDrop(e) {
  e.stopPropagation();
  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}

function createUI(dataList) {
  root.innerText = '';
  let fragment = new DocumentFragment();
  dataList.forEach((data) => {
    let li = document.createElement('li');
    li.setAttribute('draggable', true);
    li.innerText = data;
    fragment.append(li);
  });
  root.append(fragment);
}

createUI(list);

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    list.push(event.target.value);
    localStorage.setItem('list', JSON.stringify(list));
    event.target.value = '';
    createUI(list);
  }
});
let listItems = document.querySelectorAll('li');
listItems.forEach(function (item) {
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragover', handleDragOver);
  item.addEventListener('dragenter', handleDragEnter);
  item.addEventListener('dragleave', handleDragLeave);
  item.addEventListener('dragend', handleDragEnd);
  item.addEventListener('drop', handleDrop);
});
