"use strict";


// if - else
if (4 == 9) {
    console.log("Ok!");
} else {
    console.log("Not ok!");
}


// if - else if - else
const number = 50;
if (number < 49) {
    console.log('The value is less than 49');
} else if (number > 100) {
    console.log('The value is greater than 100');
} else {
    console.log('The value is between 49 and 100.');
}


// ternary if statement
(number === 50) ? console.log('The value is equal to 50!') : console.log("The value differs from 50.");


// switch statements
const num = 60;
switch (num) {
    case 49:
        console.log("The value is equal to 49.");
        break;
    case 50:
        console.log("The value is equal to 50.");
        break;
    default:
        console.log("Neither 49 or 50.")
}

