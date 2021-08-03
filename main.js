// Напишіть функцію CoffeeMake, яка буде мати в 2 методи: on(),off(). 
// Далі напишіть ще методи для 3х типів кавоварок: капельна, ріжкова, каво-машина, які будуть наслідувати базовий функціонал CoffeeMake,
// а також мати власний. Використовує класи до es6 стандарту.

function CoffeeMake(color = 'black', model) {
    this.color = color;
    this.model = model;
}

CoffeeMake.prototype.on = function() {
    console.log('ON')
}

CoffeeMake.prototype.off = function() {
    console.log('OFF')
}

// drip
function DripCoffeeMake(color, model) {
    CoffeeMake.call(this, color, model)
}

DripCoffeeMake.prototype = Object.create(CoffeeMake.prototype);
DripCoffeeMake.prototype.constructor = DripCoffeeMake;

DripCoffeeMake.prototype.start = function() {
    console.log('*bzzzz*')
}

// carob
function CarobCoffeeMake(color, model) {
    CoffeeMake.call(this, color, model)
}

CarobCoffeeMake.prototype = Object.create(CarobCoffeeMake.prototype);
CarobCoffeeMake.prototype.constructor = CarobCoffeeMake;

CarobCoffeeMake.prototype.createCoffe = function() {
    console.log('Your coffee is ready')
}

// machine 
function MachineCoffeeMake(color, model) {
    CoffeeMake.call(this, color, model)
}

MachineCoffeeMake.prototype = Object.create(MachineCoffeeMake.prototype);
MachineCoffeeMake.prototype.constructor = MachineCoffeeMake;

MachineCoffeeMake.prototype.launching = function() {
    console.log('done')
}

// copy
let dripCoffee = new DripCoffeeMake('red', '1SAD3F');
let carobCoffee = new CarobCoffeeMake('green', 'BETA001');
let machineCoffee = new MachineCoffeeMake('white', 'T1000');