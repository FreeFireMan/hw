// // Завдання №1
// // Зробити розпорядок дня за допомогою Promise та Async/await

function wakeUp(action) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (action) {
                console.log('Я прокинувся')
                resolve();
            } else {
                reject('НЕ можу проснутися');
            }
        }, 500)
    })
}

function goEat(action) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (action) {
                console.log('Йду снідати')
                resolve('Йду снідати');
            } else {
                reject('Немає що їсти');
            }
        }, 1000)
    })
}

function goWash(action) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (action) {
                console.log('Почистив зуби');
                resolve('Почистив зуби');
            } else {
                reject('Мені лінь чистити зуби');
            }
        }, 500)
    })
}

function goMarshutka(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 7) {
                console.log('Їду в маршрутці на роботу');
                resolve(money - 7);
            } else {
                reject(`На маршрутку не хватило ${Math.abs(money - 7)} грн, а там ще й дощ. Піду краще посплю.`);
            }
        }, 1000)
    })
}

function goWork(work) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (work) {
                console.log('Працюю в поті чола:)');
                resolve('Працюю в поті чола:)');
            } else {
                reject('Хм. Щось немає охоти працювати, поїду все таки додому.');
            }
        }, 200)
    })
}

function goCoffe(money, coffee) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 20) {
                console.log(`Потрібен перекур. Піду куплю собі каву ${coffee}`);
                resolve(`Потрібен перекур. Піду куплю собі каву ${coffee}`);
            } else {
                reject(`А грошей то на каву ${coffee} немає :(`);
            }
        }, 1500)
    })
}

function goHome(action) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (action) {
                console.log('Йду додому. Погода чудова)')
                resolve('Йду додому. Погода чудова)');
            } else {
                reject('Залишусь я все таки на роботі ночувати. Ще я таски не закриті...');
            }
        }, 2000)
    })
}

function goSleep(action) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (action) {
                console.log('Після роботи мало сил. Йду спати.');
                resolve('Після роботи мало сил. Йду спати.');
            } else {
                reject('Не хочу спати. Піду вийду на півко.');
            }
        }, 500)
    })
}

// // Виконання за  допомогою Promise
// wakeUp(true)
//     .then(value => {
//         return goEat(true);
//     })
//     .then(value => {
//         return goWash(true);
//     })
//     .then(value => {
//         return goMarshutka(100);
//     })
//     .then(value => {
//         return goWork(true);
//     })
//     .then(value => {
//         return goCoffe(93,'еспресо');
//     })
//     .then(value => {
//         return goHome(true);
//     })
//     .then(value => {
//         return goSleep(true);
//     })
//     .catch((err) => {
//         console.warn(err);
//     })



// // Виконання за допомогою async/await
// async function myDay() {
//     try {
//         await wakeUp(true);
//         await goEat(true);
//         await goWash(true);
//         await goMarshutka(100);
//         await goWork(true);
//         await goCoffe(93, 'лате');
//         await goHome(true);
//         await goSleep(true);
//     } catch (err) {
//         console.warn(err);
//     }
// }
//
// myDay();