"use strict";
class Car {
    constructor(brand, model, price, color) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.color = color;
    }
}
let cars = [
    new Car("BMW", "X6", 50000, "black"),
    new Car("Mazda", "RX-7", 22222, "red"),
    new Car("Lada", "Granta", 50000, "silver"),
    new Car("Audi", "Q7", 60000, "black"),
    new Car("Toyota", "Prius", 35000, "white"),
    new Car("Mazda", "MPV", 35785, "blue"),
    new Car("Ford", "Focus", 15000, "black"),
    new Car("Honda", "Accord", 66005, "purple"),
    new Car("Nissan", "Juke", 23000, "white"),
    new Car("Mitsubishi", "Lancer", 29800, "silver"),
    new Car("Renault", "Logan", 9999, "black"),
    new Car("Toyota", "Camry", 33000, "blue"),
    new Car("Subaru", "Forester", 44800, "red"),
    new Car("BMW", "X3", 42000, "green"),
];
let byBrand = cars.sort(function (a, b) {
    if (a.brand > b.brand) {
        return 1;
    }
    if (a.brand < b.brand) {
        return -1;
    }
    return 0;
});
let byPrice = cars.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    return 0;
});
let err;
var fs = require('fs');
fs.writeFile('array.json', JSON.stringify(byPrice, undefined, 1), function (err) { console.log(err ? 'Error :' + err : 'ok'); });
fs.writeFile('text.txt', JSON.stringify(byPrice), function (err) { console.log(err ? 'Error :' + err : 'ok'); });
console.log(byPrice);
//# sourceMappingURL=test.js.map