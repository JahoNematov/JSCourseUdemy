"use strict";

const soldier = {
    health: 400,
    armor: 100,
    fire: function() {
        console.log("Ratatatata!");
    }
};

const john = {
    health: 100
};


// Old format -> deprecated format
console.log("\nOld format:")
john.__proto__ = soldier;
console.log(john);
console.log(john.armor);
john.fire();


// Proper format
console.log("\nProper format:");

const mark = {
    health: 150
}

Object.setPrototypeOf(mark, soldier);
console.log(mark);
console.log(mark.armor);
mark.fire();


// Another way
console.log("\nUsing Object.create():")
const stark = Object.create(soldier);
console.log(stark);
console.log(stark.armor);
stark.fire();



