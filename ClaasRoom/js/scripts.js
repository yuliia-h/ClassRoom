const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

//const liMaker = (text) => {
//  const li = document.createElement('li');
//    li.textContent = text;
//    ul.appendChild(li);
//}

const liMaker = (text) => {
    let newDiv = document.createElement('div');   
    let divSelect = document.createElement('div');
    let sel = document.createElement('select');
    sel.id = 'mainSelect';
    sel.append(new Option('-', 0));  

    for (let i = 1; i <= 12; i++) {
        sel.append(new Option(i, i));
    }

    newDiv.textContent = text;

    // divSelect.appendChild(sel).appendChild(newDiv);
    // divSelect.appendChild(newDiv);
    
    let d = document.getElementById('myDiv');
    let d1 = document.getElementById('myDiv1');
    d.appendChild(sel);
    d.appendChild(document.createElement('div', text='  '))
    d.appendChild(sel);
    
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