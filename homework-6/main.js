// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
// const contentId = document.getElementById('content');
// console.log(contentId);


// b) отримує текст з блоку з id "rules"
// const elementById = document.getElementById('rules');
// console.log(elementById.innerText);


// c) замініть текст параграфа з id 'content' на будь-який інший
// const elementById = document.getElementById('content');
// elementById.innerText = 'Будь-який текст';
// console.log(elementById);


// d) замініть текст параграфа з id 'rules' на будь-який інший
// const elementsByClassName = document.getElementById('rules');
// elementsByClassName.innerText = 'adsadsadsads';
// console.log(elementsByClassName);


// e) змініть кожному елементу колір фону на червоний
// const elementByIdTop = document.getElementById('content');
// const elementByIdBotoom = document.getElementById('rules');
// const elementsByTagName = document.getElementsByTagName('li');
// elementByIdTop.style.backgroundColor = 'red';
// elementByIdBotoom.style.backgroundColor = 'red';
// for (let i = 0; i < elementsByTagName.length; i++) {
//     elementsByTagName[i].style.backgroundColor = 'red';
// }


// f) змініть кожному елементу колір тексту на синій
// const elementsByTagName = document.getElementsByTagName('*');
// for (let i = 0; i < elementsByTagName.length; i++) {
//     elementsByTagName[i].style.color = 'blue';
// }


// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// const elementById = document.getElementById('rules');
// console.log(elementById.className);


// h) отримати всі елементи з класом fc_rules
// const elementsByClassName = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < elementsByClassName.length; i++) {
//     console.log(elementsByClassName[i])
// }


// i) поміняти колір тексту у всіх елементів fc_rules на червоний
// const elementsByClassName = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < elementsByClassName.length; i++) {
//     elementsByClassName[i].style.color = 'red'
// }


// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement.
//     Вставити цей блок на сторінку
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
//
// for (let i = 0; i < users.length; i++) {
//     const divUser = document.createElement('div');
//     divUser.innerHTML = 'Name: ' + users[i].name + ',' + ' Age: ' + users[i].age + ',' + ' Status: ' + users[i].status + ',' + ' City: ' + users[i].address.city
//     document.body.appendChild(divUser);
// }


// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості


// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
// }];
//
//
// for (let i = 0; i < users.length; i++) {
//     const divElement = document.createElement('div');
//     divElement.innerHTML = 'Name: ' + users[i].name + ',' + ' Age: ' + users[i].age + ',' + ' Status: ' + users[i].status;
//     document.body.appendChild(divElement);
//     const divElementWithAdress = document.createElement('div');
//     const divElementWithAdress1 = document.createElement('div');
//     const divElementWithAdress2 = document.createElement('div');
//     const divElementWithAdress3 = document.createElement('div');
//     const a = divElementWithAdress.innerHTML = users[i].address.city;
//     const ab = divElementWithAdress1.innerHTML = users[i].address.country;
//     const abc = divElementWithAdress2.innerHTML = users[i].address.street;
//     const abcd = divElementWithAdress3.innerHTML = users[i].address.houseNumber;
//     divElementWithAdress.innerHTML = `City: ${a}`
//     divElementWithAdress1.innerHTML = `Country: ${ab}`
//     divElementWithAdress2.innerHTML = `Street: ${abc}`
//     divElementWithAdress3.innerHTML = `HouseNumber: ${abcd}`
//     document.body.appendChild(divElementWithAdress);
//     document.body.appendChild(divElementWithAdress1);
//     document.body.appendChild(divElementWithAdress2);
//     document.body.appendChild(divElementWithAdress3);
//     const elementBr = document.createElement('br')
//     document.body.appendChild(elementBr);
// }



// for (let i = 0; i < users.length; i++) {
//     const divElement = document.createElement('div');
//     divElement.innerHTML = 'Name: ' + users[i].name + ',' + ' Age: ' + users[i].age + ',' + ' Status: ' + users[i].status;
//     document.body.appendChild(divElement);
//     const divElementWithAdress = document.createElement('div');
//     divElementWithAdress.innerHTML = users[i].address.city
//     document.body.appendChild(divElementWithAdress);
// }


// for (let i = 0; i < users.length; i++) {
//     const divElement = document.createElement('div');
//     divElement.innerHTML = 'Name: ' + users[i].name + ',' + ' Age: ' + users[i].age + ',' + ' Status: ' + users[i].status;
//     document.body.appendChild(divElement);
//     const divElementWithAdress = document.createElement('div');
//     const divElementWithAdress1 = document.createElement('div');
//     const divElementWithAdress2 = document.createElement('div');
//     const divElementWithAdress3 = document.createElement('div');
//     const a = divElementWithAdress.innerHTML = users[i].address.city;
//     const ab = divElementWithAdress1.innerHTML = users[i].address.country;
//     const abc = divElementWithAdress2.innerHTML = users[i].address.street;
//     const abcd = divElementWithAdress3.innerHTML = users[i].address.houseNumber;
//     divElementWithAdress.innerHTML = `City: ${a}`
//     divElementWithAdress1.innerHTML = `Country: ${ab}`
//     divElementWithAdress2.innerHTML = `Street: ${abc}`
//     divElementWithAdress3.innerHTML = `HouseNumber: ${abcd}`
//     document.body.appendChild(divElementWithAdress);
//     document.body.appendChild(divElementWithAdress1);
//     document.body.appendChild(divElementWithAdress2);
//     document.body.appendChild(divElementWithAdress3);
//     const elementBr = document.createElement('br')
//     document.body.appendChild(elementBr);
// }




