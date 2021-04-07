// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
//     Назва.
//     В кожного компютера має бути метод включання.
// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===
// Від базового ПК необхідно зробити ігорний ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
//     Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, що на цьому відрі ігри не запускаються.


// Виконання

/*

class Computer {
    constructor(ram, cpu = 100, name) {
        this.ram = ram;
        this.cpu = cpu;
        this.name = name;
    }

    power() {
        console.log('Power on!')
    }
}

let pc = new Computer(32, undefined, 'My PC')
console.log(pc);
pc.power()


class Laptop extends Computer {
    constructor(ram, cpu, name, screen) {
        super(ram, cpu, name);
        this.screeen = screen;
        this.battery = Math.floor(cpu / (screen * ram));
    }
}

let hp = new Laptop(32, 1000, 'HP', 15)
console.log(hp);


class UltraLaptop extends Laptop {
    constructor(ram, cpu, name, screen, weight) {
        super(ram, cpu, name, screen);
        this.weight = weight;
    }

    power() {
        this.weight > 2 && this.battery < 4 ? console.log('Eror 404') : console.log('Power on!');
    }
}

let asus = new UltraLaptop(4, 200, 'Asus', 13.3, 2.5)
console.log(asus);
asus.power()


class BaseComputer extends Computer {
    constructor(ram, cpu, name) {
        super(ram, cpu, name);
        this.fps = cpu / ram;
    }

    game(gameName = 'Hitman 3') {
        console.log(`You are playing ${gameName} with ${this.fps} FSP`)
    }

    upgradeCPU(upgradeCPU = 0.10) {
        this.cpu * upgradeCPU >= this.cpu * 0.11 ? console.log('Oops') : this.cpu += (this.cpu * upgradeCPU);
        console.log('You`ve successfully upgraded your PC');
    }

    upgradeRAM() {
        this.ram *= 2;
    }
}

let basePc = new BaseComputer(32, 400, 'My Base PC')
console.log(basePc);
basePc.game('Dota 2')
basePc.upgradeCPU(0.05);
basePc.upgradeRAM();
console.log(basePc);


class GamingComputer extends BaseComputer {
    constructor(ram, cpu, name) {
        super(ram, cpu, name);
        this.fps *= 2;
    }

    gameEror() {
        if (this.cpu < 500 && this.ram < 8) {
            console.log(`You cannot play games on your F**king Gaming PC`)
        } else {
            this.game()
        }
    }
}

let gamingPC = new GamingComputer(16, 600, 'My Gaming PC')
console.log(gamingPC);
gamingPC.gameEror()

let gamingPC2 = new GamingComputer(4, 400, 'My Gaming PC')
console.log(gamingPC2);
gamingPC2.gameEror()

*/