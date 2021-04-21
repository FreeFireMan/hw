// // Завдання №1
// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// const htmlElement = document.querySelector('#textarea');
// htmlElement.value = localStorage.getItem('key');
//
// htmlElement.oninput = () => {
//     localStorage.setItem('key', htmlElement.value);
// }


// // Завдання №2
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
// const form = document.forms.forma;
//
// for (const formElement of form) {
//     if (formElement.type === 'radio') {
//         let value = localStorage.getItem(formElement.name);
//         if (formElement.id === value) {
//             formElement.checked = true;
//         }
//     } else if (formElement.type === 'checkbox') {
//         formElement.checked = localStorage.getItem(formElement.name);
//     } else if (formElement.type === 'input') {
//         formElement.input = localStorage.getItem(formElement.name);
//     } else {
//         formElement.value = localStorage.getItem(formElement.name);
//     }
// }
//
// form.oninput = ({target: {type, name, value, checked}}) => {
//     if (type === 'radio') {
//         localStorage.setItem(name, value);
//     } else if (type === 'checkbox') {
//         localStorage.setItem(name, checked);
//     } else if (type === 'input') {
//         localStorage.setItem(name, value);
//     } else {
//         localStorage.setItem(name, value);
//     }
// }


// // Завдання №3
// - Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
//(не забудьте! чекпоинт истории - нажатеи кнопки сохранить).
// const textEl = document.getElementById('textareaTwo');
// const saveBtn = document.getElementById('save');
// const leftBtn = document.getElementById('leftBtn');
// const rightBtn = document.getElementById('rigthBtn');
// const inp = 'input';
// let index = 0;
//
// if (!localStorage.getItem(inp)) {
//     localStorage.setItem(inp, JSON.stringify([]));
// }
//
// saveBtn.onclick = () => {
//     const data = textEl.value;
//     const db = JSON.parse(localStorage.getItem(inp));
//     db.push(data);
//     localStorage.setItem(inp, JSON.stringify(db))
// }
//
// leftBtn.onclick = () => {
//     const db = JSON.parse(localStorage.getItem(inp));
//     if (db.length) {
//         if (index -1 >= 0) {
//             index--;
//         } else {
//             index = db.length - 1;
//         }
//         textEl.value = db[index];
//     }
// }
//
// rightBtn.onclick = () => {
//     const db = JSON.parse(localStorage.getItem(inp));
//     if (db.length) {
//         if (index + 1 < db.length) {
//             index++;
//         } else {
//             index = 0;
//         }
//         textEl.value = db[index];
//     }
// }