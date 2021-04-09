// // 1) Створити масив з 20 чисел та:
// // a) відсортувати його від меншого до більшого.
// // b) відсортувати його від більшого до меншого.
// // c) Відфілтрувати числа які є кратними 3.
// // d) Відфілтрувати числа які є більшими за 10.
// // e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// // f) За допомогою map збільшити кожен елемент в масиві в три рази.
// // g) Порахувати загальну суму всіх елментів у масиві (reduce)

// // Виконання завдання №1
// // 1) Створити масив з 20 чисел та:
// // a) відсортувати його від меншого до більшого.
// let arr = [20, 30, 40, 10, 5.5, 1, 321, 421, 566, 14, 202, 20, 120, 40, 10, 99, 17, 3, 20, 10];
// arr.sort((a, b) => {
//     return a - b
// })
// console.log(arr);


// // b) відсортувати його від меншого до більшого.
// let arr = [20, 30, 40, 10, 5.5, 1, 321, 421, 566, 14, 202, 20, 120, 40, 10, 99, 17, 3, 20, 10];
// arr.sort((a, b) => {
//     return b - a
// })
// console.log(arr);


// // c) Відфілтрувати числа які є кратними 3.
// let arr = [20, 30, 40, 10, 5.5, 1, 321, 421, 566, 14, 202, 20, 120, 40, 10, 99, 17, 3, 20, 10];
// const newArr = arr.filter(value => value % 3 === 0);
// console.log(newArr);


// // c) Відфілтрувати числа які є більшими за 10.
// let arr = [20, 30, 40, 10, 5.5, 1, 321, 421, 566, 14, 202, 20, 120, 40, 10, 99, 17, 3, 20, 10];
// const newArr = arr.filter(value => value > 10);
// console.log(newArr);


// // e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// let arr = [20, 30, 40, 10, 5.5, 1, 321, 421, 566, 14, 202, 20, 120, 40, 10, 99, 17, 3, 20, 10];
// arr.forEach(value => document.write(value + ' '));


// // f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let arr = [20, 30, 40, 10, 5.5, 1, 321, 421, 566, 14, 202, 20, 120, 40, 10, 99, 17, 3, 20, 10];
// const newArr = arr.map(value => value * 3);
// console.log(newArr);


// // g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let arr = [20, 30, 40, 10, 5.5, 1, 321, 421, 566, 14, 202, 20, 120, 40, 10, 99, 17, 3, 20, 10];
// const newArr = arr.reduce((acc, value) => acc + value);
// console.log(newArr);





// 2) Створити масив з 20 стрічок та:
// a) Відсортувати його в алфавітному порядку
// b) Відсортувати в зворотньому порядку
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'


// // Виконання завдання №2
// // Створити масив з 20 стрічок та:
// // a) Відсортувати його в алфавітному порядку
// let arr = ['Alex', 'Sanya', 'Sasha', 'Yurii', 'Orest', 'Ivanna', 'Olya', 'Olena', 'Tom', 'Jame', 'Leks', 'Jamson', 'Whiskey', 'Car', 'Pc', 'Javascript', 'Java', 'Php', 'Html', 'Css'];
// const newArr = arr.sort();
// console.log(newArr);


// // b) Відсортувати в зворотньому порядку
// let arr = ['Alex', 'Sanya', 'Sasha', 'Yurii', 'Orest', 'Ivanna', 'Olya', 'Olena', 'Tom', 'Jame', 'Leks', 'Jamson', 'Whiskey', 'Car', 'Pc', 'Javascript', 'Java', 'Php', 'Html', 'Css'];
// const newArr = arr.sort((a, b) => {
//     if (b > a) {
//         return 1
//     } else {
//         return -1
//     }
// });
//
// console.log(newArr);


// // c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let arr = ['Alex', 'Sanya', 'Sasha', 'Yurii', 'Orest', 'Ivanna', 'Olya', 'Olena', 'Tom', 'Jame', 'Leks', 'Jamson', 'Whiskey', 'Car', 'Pc', 'Javascript', 'Java', 'Php', 'Html', 'Css'];
// const newArr = arr.filter(value => value.length > 4);
// console.log(newArr);


// // d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let arr = ['Alex', 'Sanya', 'Sasha', 'Yurii', 'Orest', 'Ivanna', 'Olya', 'Olena', 'Tom', 'Jame', 'Leks', 'Jamson', 'Whiskey', 'Car', 'Pc', 'Javascript', 'Java', 'Php', 'Html', 'Css'];
// arr.forEach(value => console.log(`Sam says ${value}`))





// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
//     const users = [
//         {name: 'vasya', age: 31, isMarried: false},
//         {name: 'petya', age: 30, isMarried: true},
//         {name: 'kolya', age: 29, isMarried: true},
//         {name: 'olya', age: 28, isMarried: false},
//         {name: 'max', age: 30, isMarried: true},
//         {name: 'anya', age: 31, isMarried: false},
//         {name: 'oleg', age: 28, isMarried: false},
//         {name: 'andrey', age: 29, isMarried: true},
//         {name: 'masha', age: 30, isMarried: true},
//         {name: 'olya', age: 31, isMarried: false},
//         {name: 'max', age: 31, isMarried: true}
//     ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// d) відсортувати його за індентифікатором
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)


// // Виконання завдання №3
// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];

// // a) відсортувати його за  віком (зростання , а потім окремо спадання)
// const newArr = users.sort((a, b) => {
//     if (a.age > b.age) {
//         return 1
//     } else  {
//         return -1
//     }
// })
//
// console.log(newArr);


// // b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// const newArr = users.sort((a, b) => {
//     if (a.age < b.age) {
//         return 1
//     } else  {
//         return -1
//     }
// })
//
// console.log(newArr);


// // c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення)
// // та зберегти це в новий масив (первинний масив залишиться без змін)
// let jsonClone = JSON.stringify(users)
// let newArr = JSON.parse(jsonClone)
//
// newArr.map((value, index) => {
//     value.id = index;
// });
//
// console.log(users);
// console.log(newArr);


// // d) відсортувати його за індентифікатором (відсортував я від найбільшого до найменшого)
// let jsonClone = JSON.stringify(users)
// let newArr = JSON.parse(jsonClone)
//
// newArr.map((value, index) => {
//     value.id = index;
// });
//
// newArr.sort((a, b) => {
//     return b.id - a.id
// })
//
// console.log(newArr);

// // e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// let newArr = [];
// users.map((value) => {
//     if (value.isMarried === true) {
//         newArr.push(value);
//         value.reduce = true;
//     }
// });
//
// console.log(newArr);
