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

const getNewId = () => {
    return itemsArray.length;
}

const studentMaker = (text) => {
    let idDiv = document.createElement('div');
    idDiv.textContent = getNewId();
    let nameDiv = document.createElement('div');
    nameDiv.textContent = text;
    let newDiv = document.createElement('div');    
    newDiv.id = 'stdLineDiv';
    let d = document.getElementById('myDiv');
    newDiv.appendChild(idDiv);
    newDiv.appendChild(nameDiv);
    
    for (let i = 0; i < 5; i++)
        newDiv.appendChild(selectorMaker());  
    
    d.appendChild(newDiv);       
}

document.getElementById('mainForm').addEventListener('submit', function (e) {
  e.preventDefault();
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  studentMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  studentMaker(item);
});

document.getElementById('clearButton').addEventListener('click', function () {
    localStorage.clear();

    const d = document.getElementById('myDiv');

  while (d.firstChild) {
    d.removeChild(d.firstChild);
  }
  itemsArray = [];
});