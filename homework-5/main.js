//  Завдання №1
/*
--створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль
*/

// let array = [1,10,100,1000,10000];
// console.log(array);

// let array = ['My','name','is','Orest',';)'];
// console.log(array);

// let array = ['I', 'am', 20, 'years old', true];
// console.log(array);




//  Завдання №2
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = 'hello';
// array[1] = 'ok';
// array[2] = 10;
// console.log(array);




//  Завдання №3
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i< 10; i++) {
//     document.write(`<div>hi</div>`)
// }




//  Завдання №4
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Number ${i}</div>`);
// }



//  Завдання №5
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині
// let i = 0;
// while (i<20) {
//     document.write(`<h1>Header</h1>`);
//     i++;
// }



//  Завдання №6
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Title ${i}</h1>`);
//     i++;
// }



//  Завдання №7
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array = [2,4,6,8,10,12,14,16,18,20];
//
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
//
// for (const number of array) {
//     console.log(number);
// }



//  Завдання №8
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let array = ['a','b','c','d','e','f','g','h','i','j'];
// let i = 0;
//
// while (i<array.length) {
//     console.log(array[i]);
//     i++;
// }


//  Завдання №9
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = [1,true,0,false,'true',101,'NaN','201',999,':)'];
// for (let i = 0; i<array.length; i++) {
//     console.log(array[i]);
// }


//  Завдання №10
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array = [10,'orest',20,true,10,0,false,'true',2,'hello'];
//
// for (let i=0; i<array.length; i++) {
//     if (typeof array[i] === 'boolean') {
//         console.log(array[i])
//     }
// }



//  Завдання №11
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array = [10,'orest',20,true,10,0,false,'true',2,'hello'];
// let i = 0;
//
// while (i<10) {
//     if (typeof array[i] === 'number') {
//         console.log(array[i])
//     }
//     i++;
// }



//  Завдання №12
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array = [10, false, 20, 10, true, 'hi,', false, 'how', 'are', 'you?'];
//
// for (let i=0; i<array.length; i++) {
//     if (typeof array[i] === 'string') {
//         console.log(array[i])
//     }
// }



//  Завдання №13
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
//
// array[0] = 10;
// array[1] = true;
// array[2] = '3';
// array[3] = 2.421;
// array[4] = 'genis';
// array[5] = 1;
// array[6] = 'false';
// array[7] = false;
// array[8] = 0;
// array[9] = 101;

// for (const arrayElement of array) {
//     console.log(arrayElement)
// }




//  Завдання №14
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log('крок:',i);
//     document.write(`<div>крок: ${i}</div>`)
// }



//  Завдання №15
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log('крок',i);
//     document.write(`<div>крок ${i}</div>`)
// }



//  Завдання №16
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i = i + 2) {
//     console.log('крок',i);
//     document.write(`<div>крок ${i}</div>`)
// }


//  Завдання №17
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (i = 1; i < 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`)
//     }
// }



//  Завдання №18
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (i = 1; i < 100; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
//         document.write(`<div>${i}</div>`)
//     }
// }



//  Завдання №19
//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// let seconds = 0;
// let minutes = 0;
//
// for (let i = 0; i <= 2; i++) {
//     console.log(minutes++, 'хвилини')
//     for (let i = 0; i <= 59 && minutes !== 3; i++) {
//         console.log(seconds++, 'секунд')
//     }
//     seconds = 0;
// }


//  Завдання №20
//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// let seconds = 0;
// let minutes = 0;
// let hour = 0;
//
// for (let i = 0; i <= 2; i++) {
//     console.log(hour++, ':година');
//     for (let i = 0; i <= 59 && hour !== 4; i++) {
//         console.log(minutes++, ':хвилина');
//         for (let i = 0; i <= 59 && hour !== 4 && minutes !== 21; i++) {
//             // console.log(sec++, ':секунда');
//             seconds++;
//         }
//         seconds = 0;
//     }
//     minutes = 0;
// }



//  Додатково
// Завдання №1
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let array = ['a', 'b', 'c'];
// let abc = '';
// for (let i = 0; i < array.length; i++) {
//     abc = abc + array[i]
// }
//     console.log(abc);


// Завдання №2
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let array = ['a', 'b', 'c'];
// let abc = '';
// let i = 0;
// while (i < array.length) {
//     abc = abc + array[i];
//     i++
// }
//     console.log(abc);


// Завдання №3
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let array = ['a', 'b', 'c'];
// let abc = '';
// for (const arrayElement of array) {
//     abc = abc + arrayElement;
// }
//     console.log(abc);


// Завдання №4
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
// let array = ['a', 'b', 'c'];
// let abc = '';
// for (const arrayKey in array) {
//     abc = abc + array[arrayKey];
// }
//     console.log(abc);