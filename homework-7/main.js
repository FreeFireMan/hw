// 1) створити функцію яка приймає масив та виводить його
// let array = [231, 2313, 'adsdas', false, 321.4124];
//
// function outputArray () {
//     console.log(array)
//     for (const arrElement of array) {
//         console.log(arrElement);
//     }
// }
//
// outputArray();


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function outputArray () {
//     console.log(createArray())
// }
//
// function createArray () {
//     let array = [];
//     for (let i = 0; i < 10; i++) {
//         array.push(Math.floor(Math.random()* 100))
//     }
//     return array
// }
//
// outputArray()


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function outputNumber(arr = []) {
//     let max = arr[0];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
//
// let output = outputNumber([+prompt('Введіть перше число'), +prompt('Введіть друге число'), +prompt('Введіть третє число')])
// console.log(output)


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function outputNumber(arr = []) {
//     let max = arr[0];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
//
// let output = outputNumber([+prompt('Введіть перше число'), +prompt('Введіть друге число'), +prompt('Введіть третє число')])
// console.log(output)


// 5) створити функцію яка повертає найбільше число з масиву
// function outputNumber (arr = []) {
//         let max = arr[0];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
//
// let output = outputNumber([20, 14, 515, 10, 0, 4124, 10000])
// console.log(output)


// 6) створити функцію яка повертає найменьше число з масиву
// function outputNumber (arr = []) {
//     let max = arr[0];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
//
// let output = outputNumber([41, 2, 451, 11, 3, 511, 140, 591]);
// console.log(output);


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function outputArray (arr = []) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum
// }
//
// let array = outputArray([123, 3, 50, 10.241, 90, 10, 0, 111]);
// console.log(array)


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function outputArray (arr = []) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }

//     sum /= arr.length
//     return sum
// }
//
// let array = outputArray([100, 200, 300, 400, 1000, 2000]);
// console.log(array);


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let array = [{name: 'orest', age: 20, skills: ['html', 'css', 'js']}, {city: 'lviv'}];
// let concatArray = [];
//
// function outputArray (array) {
//     for (let i = 0; i < array.length; i++) {
//         concatArray.push(Object.keys(array[i]))
//     }
//     return concatArray.flat();
// }
//
// console.log(outputArray(array));


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let array = [{name: 'orest', age: 20, skills: ['html', 'css', 'js']}, {city: 'lviv'}];
// let concatArray = [];
//
// function outputArray (array) {
//     for (let i = 0; i < array.length; i++) {
//         concatArray.push(Object.values(array[i]))
//     }
//     return concatArray.flat(2);
// }
//
// console.log(outputArray(array));


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами та повертає новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
//      результат
//     [3,5,7,9]

// let arrayOne = [1, 2, 3, 4];
// let arrayTwo = [2, 3, 4, 5];
// let newArray = [];
//
// function outputArray (arrayOne, arrayTwo) {
//     for (let i = 0; i < arrayOne.length; i++) {
//         newArray.push(arrayOne[i]+arrayTwo[i])
//     }
//     return newArray
// }
//
// console.log(outputArray(arrayOne, arrayTwo))





// ******************* НАЗАД В МИНУЛЕ *********************** //
// Завдання №1
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// let outputText = () => {
//     const divElement = document.createElement('div');
//     divElement.innerText = 'Hello owu';
//     document.body.appendChild(divElement);
// }
//
// outputText();


// Завдання №2
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// let outputElement = (elementType, elementText) => {
//     const Element = document.createElement(prompt('Enter element', 'p'));
//     Element.innerText = prompt('Enter inner text', 'Hello');
//     document.body.appendChild(Element);
// }
//
// outputElement();
// ******************* НАЗАД В МИНУЛЕ *********************** //






// ============================================================================================
// ЗАДАЧІ ПІДВИЩЕНОГО РІВНЯ СКЛАДНОСТІ
// ============================================================================================
// Завдання 1) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]

// let arr = [1, 3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];
// let newArr = arr.flat(4);
//
// console.log(newArr)