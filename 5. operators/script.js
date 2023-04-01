"use strict";

console.log("Array is " + "an" + " object.");  // prints "Array is an object"
console.log(4 + "5"); 
console.log(4 + +"5");


// Incrementing (post prefix and postfix)
console.log("Incrementing/Decrementing values.")
let incr = 10,
    decr = 10;

// Postfix format is returns old value first
console.log(incr++); 
console.log(decr--);

// Prefix format returns new value
incr = decr = 10;
console.log(++incr);
console.log(--decr);


// Modulus
console.log("Finding the modulus of 5 / 2.")
console.log(5 % 2);


// Logical operators
console.log("Check whether 5 is equal to 7; 8 to 8; 8 to '8'");
console.log(6 == 8);
console.log(8 == 8);
console.log(8 == '8');
console.log(8 === '8');

// && -> AND logical operator
// || -> OR logical operator
console.log("AND, OR and NOT logical operators.")
const isChecked = true,
      isClosed = true,
      isAvailable = false;
console.log(isChecked && isClosed);
console.log(isChecked && isAvailable);
console.log(isChecked || isAvailable);
console.log(!isAvailable);

console.log("Using NOT in comparison.")
console.log(6 != 8);
console.log(6 != '6');
console.log(6 !== '6');