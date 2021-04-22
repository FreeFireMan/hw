// Завдання №1
// Зробити розпорядок дня за допомогою колбеків


// function wakeUp(action, cb) {
//     setTimeout(() => {
//         if (action) {
//             console.log('Я прокинувся');
//             cb(null, 'Я прокинувся');
//             return
//         } else {
//             cb('НЕ можу проснутися');
//         }
//     }, 1000)
// }
//
// function goEat(action, cb) {
//     setTimeout(() => {
//         if (action) {
//             console.log('Йду снідати');
//             cb(null, 'Йду снідати');
//             return;
//         } else {
//             cb('Немає що їсти');
//         }
//     }, 1500)
// }
//
// function goWash(action, cb) {
//     setTimeout(() => {
//         if (action) {
//             console.log('Почистив зуби');
//             cb(null, 'Почистив зуби');
//             return;
//         } else {
//             cb('Мені лінь чистити зуби');
//         }
//     }, 500)
// }
//
// function goMarshutka(money, cb) {
//     setTimeout(() => {
//         if (money >= 7) {
//             console.log('Їду в маршрутці на роботу');
//             cb(null, 'Їду в маршрутці на роботу');
//             return;
//         } else {
//             cb(`На маршрутку не хватило ${Math.abs(money - 7)} грн, а там ще й дощ. Піду краще посплю.`);
//         }
//     }, 1500)
// }
//
// function goWork(work, cb) {
//     setTimeout(() => {
//         if (work) {
//             console.log('Працюю в поті чола:)');
//             cb(null, 'Працюю в поті чола:)');
//             return;
//         } else {
//             cb('Хм. Щось немає охоти працювати, поїду все таки додому.');
//         }
//     }, 2000)
// }
//
// function goCoffe(money, coffee, cb) {
//     setTimeout(() => {
//         if (money > 20) {
//             console.log(`Потрібен перекур. Піду куплю собі каву ${coffee}`);
//             cb(null, `Потрібен перекур. Піду куплю собі каву ${coffee}`);
//             return;
//         } else {
//             cb(`А грошей то на каву ${coffee} немає :(`);
//         }
//     }, 500)
// }
//
// function goHome(action, cb) {
//     setTimeout(() => {
//         if (action) {
//             console.log('Йду додому. Погода чудова)')
//             cb(null, 'Йду додому. Погода чудова)');
//         } else {
//             cb('Залишусь я все таки на роботі ночувати. Ще я таски не закриті...');
//         }
//     }, 1500)
// }
//
// function goSleep(action, cb) {
//     setTimeout(() => {
//         if (action) {
//             console.log('Після роботи мало сил. Йду спати.');
//             cb(null, 'Після роботи мало сил. Йду спати.');
//             return
//         } else {
//             cb('Не хочу спати. Піду вийду на півко.');
//         }
//     }, 1000)
// }
//
// wakeUp(true, (err, data) => {
//     if (err) {
//         console.warn(err);
//         return;
//     }
//     goEat(true, (err, data) => {
//         if (err) {
//             console.warn(err);
//             return;
//         }
//         goWash(true, (err, data) => {
//             if (err) {
//                 console.warn(err);
//                 return;
//             }
//             goMarshutka(39, (err, data) => {
//                 if (err) {
//                     console.warn(err);
//                     return;
//                 }
//                 goWork(true, (err, data) => {
//                     if (err) {
//                         console.warn(err);
//                         return;
//                     }
//                     goCoffe(15, 'Лате', (err, data) => {
//                         if (err) {
//                             console.warn(err);
//                             return;
//                         }
//                         goHome(true, (err, data) => {
//                             if (err) {
//                                 console.warn(err);
//                                 return;
//                             }
//                             goSleep(true, (err, data) => {
//                                 if (err) {
//                                     console.warn(err);
//                                     return;
//                                 }
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })