"use strict";

let globalNumber = 25;
let value = 55;

// verb + camelCase
function showFirstMessage(userName) {
    let num = 20;
    let value = 100;
    globalNumber = 30;
    console.log(`Hello ${userName} 😎.`);
}

showFirstMessage('Jahongir Nematov');
// console.log(num)  // generates an error. Variable outside of the scope of function
console.log(globalNumber);
console.log(value);

/*----------------------------------------------------------*/ 

function calc(a, b) {
    return a + b;
    console.log("Unreacheable line.");
}

function ret() {
    let num = 12;
    return num;
}

console.log(calc(5, 8));
console.log(ret());

