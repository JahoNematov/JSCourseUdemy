"use strict";

// Dynamic typisation is the ability of one Object
// transform to another one depending on situation

// For example integer may become string
// String may become integer
// Same thing for booleans


// To String

// 1)
console.log("\nNot good way:")
console.log(typeof(String(null)));  // null becomes 'string'
console.log(typeof(String(4)));  // integer becomes "string"

// 2)
console.log("\nBetter way:")
console.log(typeof(5 + ''));  // another way
console.log(typeof(null + ''));

const fontSize = 26 + "px";
console.log(fontSize);

// To Number
// 1)
console.log("\nNot good way:");
console.log(typeof(Number("4")));  // 

// 2)
console.log("\nUnary way:");
console.log(typeof(+"5"));

// 3)
console.log("\nAnother way:");
console.log(typeof(parseInt("15px", 10)));  // second argument is numeric system


// To boolean

// Always FALSE values -> 0, '', null, undefined, NaN

// 1)
let switcher = null;
if (switcher) {
    console.log("Working...");
}

switcher = 1;
if (switcher) {
    console.log("Working...");
}

switcher = [];
if (switcher) {
    console.log("Working...");
}

// 2)
console.log(typeof(Boolean(4)));

// 3)
console.log(typeof(!!"44"));