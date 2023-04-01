"use strict";

let number = 148;
let pi = 3.14;

console.log(4/0);  // returns Infinity
console.log(-1/0);  // returns -Infinity
console.log('string' * 9); // NaN - not an number

const person = "Jahongir";
const msg = "Call me at 12:00";

let is_graduate = false;
let has_passport = true;

// console.log(something);  // We will get an error. Null
let empty;
console.log(empty);  // returns 'undefined'


// Objects 
const obj = {
    name: "Jahongir",
    age: 21,
    isMarried: false,
};

console.log(obj.name);  // prints "Jahongir"
console.log(obj["name"]);  // exactly same result

// Note that massive is and OBJECT!
let friends = ["John", "Stan", "Peter", "Cal"];
let array = ['banana.jpg', 18, true, {name: "Cal"}];

console.log(friends[1]);  // prints Stan
console.log(array[0]);  // prints banana.jpg
console.log(array[3]);  // {name: Cal}
