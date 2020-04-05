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
     //<div id = "Score" >
     //   <select name="selectoptions">
     //       <option value="option0">-</option>
     //       <option value="option1">1</option>
     //       <option value="option2">2</option>
     //       <option value="option3">3</option>
     //       <option value="option4">4</option>
     //       <option value="option5">5</option>
     //       <option value="option6">6</option>
     //       <option value="option7">7</option>
     //       <option value="option8">8</option>
     //       <option value="option9">9</option>
     //       <option value="option10">10</option>
     //       <option value="option11">11</option>
     //       <option value="option12">12</option>
     //   </select>
     //</div >
    
    let sel = document.createElement('select');
    let opt = document.createElement('option');
    opt.value = 1;
    opt.text = 1;
    sel.appendChild(opt);
    let newDiv1 = document.createElement('div');

    newDiv1.appendChild(sel);
    newDiv.textContent = text;
    document.getElementById('myDiv').appendChild(newDiv); 
    document.getElementById('myDiv').appendChild(newDiv1);  
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