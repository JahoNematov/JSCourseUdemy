"use strict";

const text = "test";
const arr = [2, 3, 4];

console.log(text.length);  // attributes does not include parentheses
console.log(arr.length);

console.log(text[2]);
// str[2] = 'd';  -> we can not change it! Instead use methods.

/* String methods */
let str = 'Test';

console.log(str.toUpperCase());  // returns new value. Does not change argument
console.log(str.toLowerCase());  
console.log(str);

//           0123456789
let fruit = 'Some fruit';
console.log(fruit.indexOf('e'));
console.log(fruit.indexOf("rui"));
console.log(fruit.indexOf("t"));
console.log(fruit.indexOf('q'));

// Slicing the text
            //0123456789
const logg = "Hello world";

console.log(logg.slice(6, 11));  // end value is excluded
console.log(logg.slice(6));  // exactly same thing
console.log(logg.slice(-1));
console.log(logg.slice(-5, -1));


// Working with numbers
const num = 12.2;

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(num);

const test = "12.22px";
console.log(parseInt(test));
console.log(parseFloat(test));


