    const form = document.querySelector('form');
    const ul = document.querySelector('ul');
    const button = document.querySelector('button');

    const input = document.getElementById('item');
    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

    const dateFrom = document.getElementById('dateForm');
    var dateArray = localStorage.getItem('dates') ? JSON.parse(localStorage.getItem('dates')) : [];

    localStorage.setItem('dates', JSON.stringify(dateArray));
    localStorage.setItem('items', JSON.stringify(itemsArray));

    const data = JSON.parse(localStorage.getItem('items'));
    const dateData = JSON.parse(localStorage.getItem('dates'));

    const selectorMaker = () => {
        let sel = document.createElement('select');
        sel.id = 'mainSelect';
        sel.append(new Option('-', 0));

        for (let i = 1; i <= 12; i++) {
            sel.append(new Option(i, i));
        }

        return sel;
    }

    //const dataMaker = () => {
    //    let sel = document.createElement('select');
    //    sel.id = 'mainSelect';
    //    sel.append(new Option('-', 0));

    //    for (let i = 1; i <= 12; i++) {
    //        sel.append(new Option(i, i));
    //    }

    //    return sel;
    //}

    const getNewId = () => {
        return itemsArray.length;

    }
    var count = 1;
    const studentMaker = (text) => {

        let idDiv = document.createElement('div');
        idDiv.id = 'idDiv';
        idDiv.textContent = count + '.';
        let nameDiv = document.createElement('div');
        nameDiv.id = 'nameDiv';
        nameDiv.textContent = text;
        let newDiv = document.createElement('div');
        newDiv.id = 'stdLineDiv';
        let deleter = document.createElement('button');
        deleter.id = 'del';
        deleter.textContent = "Del";

        let d = document.getElementById('myDiv');
        newDiv.appendChild(idDiv);
        newDiv.appendChild(nameDiv);

        for (let i = 0; i < dateArray.length; i++)
            newDiv.appendChild(selectorMaker());
        newDiv.appendChild(deleter);
        d.appendChild(newDiv);
        count++;
    }
    const DatePusher = (datePush) => {
        dateArray.push(datePush);
        localStorage.setItem('dates', JSON.stringify(dateArray));
    }
    const dateEdder = (dateT) => {
        let d = document.getElementById('MidScore');
        let t = document.createElement('label');
        t.id = 'dateL';
        t.textContent = dateT;       
        d.appendChild(t);

        count = 1;
        refreshStud();
    }
    const refreshStud = function () {
        //let tmp = []
        //for (let i = 0; i < itemsArray.length; i++)
        //    tmp[i] = itemsArray[i];
        const d = document.getElementById('myDiv');

        while (d.firstChild) {
            d.removeChild(d.firstChild);
        }

        data.forEach(item => {
            studentMaker(item);
        });
    }


    //document.getElementById('dateForm').addEventListener('submit', function (e) {
    //    e.preventDefault();
    //    dateEdder(input.value);
    //});

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
    dateData.forEach(item => {
        dateEdder(item);
    })
    document.getElementById('clearButton').addEventListener('click', function () {
        localStorage.clear();

        const d = document.getElementById('myDiv');
        const remDate = document.getElementById('MidScore')
        while (d.firstChild) {
            d.removeChild(d.firstChild);
        }
        while (remDate.firstChild) {
            remDate.removeChild(remDate.firstChild);
        }
        itemsArray = [];
        dateArray = [];
    });

