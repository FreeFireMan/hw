// Завдання №1
// - Створити довільний елемент с id = text. Використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникав елемент с id="text".
// const textComponent = document.querySelector('#text');
// const btnComponent = document.querySelector('.textbtn');
//
// btnComponent.onclick = () => {
//     textComponent.style.display = 'none';
// }


// Завдання №2
// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// const btnHidden = document.querySelector('.btn-hidden');
// btnHidden.onclick = () => {
//     btnHidden.style.visibility = 'hidden';
// }


// Завдання №3
// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// const btnAge = document.querySelector('.check-age');
// const inputAge = document.querySelector('#input-age');
//
// btnAge.onclick = (ev) => {
//     ev.preventDefault();
//     inputAge.value >= 18 ? alert('Hello, adult') : alert('Hello, child');
// }
//

// Завдання №4
// - Створіть меню, яке розгортається/згортається при кліку
// const btnMenu = document.querySelector('.menu-btn');
// const menu = document.querySelector('#menu-list');
//
// btnMenu.onclick = () => {
//     if (menu.style.display == 'block') {
//         menu.style.display = 'none';
//     } else {
//         menu.style.display = 'block';
//     }
// }


// Завдання №5
// - Створіть список коментарів, приклад об'єкту коментаря - {title : 'lorem', body: 'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
// Додайте кожному коментарю по кнопці для згортання його body.
// let comments = [
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'ipsum', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'dolo', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'sit', body: 'lorem ipsum dolo sit ameti'}
// ];
//
// let h1Element = document.createElement('h1');
// h1Element.innerText = 'Завдання №5';
// document.body.appendChild(h1Element);
//
// for (let i = 0; i < comments.length; i++) {
//     let divGenerelElement = document.createElement('div');
//     let divElement = document.createElement('div');
//     let btnElement = document.createElement('div');
//     divGenerelElement.classList = 'general';
//     divElement.classList = 'content';
//     // btnElement.classList = 'buttnos';
//     divElement.innerHTML = `<h2>${comments[i].title}</h2> <p>${comments[i].body}</p>`;
//     btnElement.innerHTML = `<button class="btncloser">Натисніть щоб приховати блок</button> <button class="btnview">Натисніть щоб показати блок</button>`;
//     divGenerelElement.appendChild(divElement);
//     divGenerelElement.appendChild(btnElement);
//     document.body.appendChild(divGenerelElement);
// }
//
// const selectors = document.querySelectorAll('.content');
// const buttonClose = document.getElementsByClassName('btncloser');
// const buttonView = document.getElementsByClassName('btnview');
// console.log(selectors);
//
// for (let i = 0; i < buttonClose.length; i++) {
//     buttonClose[i].onclick = () => {
//         selectors[i].style.display = 'none';
//     };
// }
//
// for (let i = 0; i < buttonView.length; i++) {
//     buttonView[i].onclick = () => {
//         selectors[i].style.display = 'block';
//     };
// }


// Завдання №6
// - Створити 2 форми по 2 інпути в кожній. Створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2-х форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки).
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const formOne = document.getElementById('form1');
// const formTwo = document.getElementById('form2');
// const btnForm = document.getElementsByClassName('form-btn');
//
// btnForm[0].onclick = () => {
//     console.log(formOne.formOneText1.value);
//     console.log(formOne.formOneText2.value);
//     console.log(formTwo.formTwoText1.value);
//     console.log(formTwo.formTwoText2.value);
// }


// Завдання №7
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// const createTable = (row, column, target) => {
//     const targetElement = document.querySelector(target);
//     const table = document.createElement('table');
//     targetElement.appendChild(table);
//     for (let i = 0; i < row; i++) {
//         const elementTr = document.createElement('tr');
//         table.appendChild(elementTr);
//         for (let j = 0; j < column; j++) {
//             const elementTd = document.createElement('td');
//             elementTd.innerText = 'text';
//             elementTr.appendChild(elementTd);
//         }
//     }
// };
//
// createTable(6, 2, '#block-for-table');