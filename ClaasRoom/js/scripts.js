const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const selectorMaker = () => {
    let sel = document.createElement('select');
    sel.id = 'mainSelect';
    sel.append(new Option('-', 0));

    for (let i = 1; i <= 12; i++) {
        sel.append(new Option(i, i));
    }

    return sel;
}

const liMaker = (text) => {
    let newDiv = document.createElement('div');
    newDiv.textContent = text;
    newDiv.id = 'stdLineDiv';
    let d = document.getElementById('myDiv');
    
    for (let i = 0; i < 5; i++)
        newDiv.appendChild(selectorMaker());
    
    d.appendChild(newDiv);       
}

document.getElementById('mainForm').addEventListener('submit', function (e) {
  e.preventDefault();
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

document.getElementById('clearButton').addEventListener('click', function () {
    localStorage.clear();

    const d = document.getElementById('myDiv');

  while (d.firstChild) {
    d.removeChild(d.firstChild);
  }
  itemsArray = [];
});