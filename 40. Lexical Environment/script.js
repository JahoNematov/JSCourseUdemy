"use strict";

// "use strict";

// let number = 5; debugger;

// function logNumber() {  
//     let number = 4; debugger;  
//     console.log(number);
// }

// number = 6;
// logNumber(); debugger;  // each of call has seperate lexical environment

// number = 8;
// logNumber(); debugger;  // each of call has seperate lexical environment

function createCounter() {
    let counter = 0; debugger;

    const myFunction = function() {  debugger;
        counter = counter + 1; debugger;
        return counter; debugger;
    }

    return myFunction;
}

debugger;
const increment = createCounter();
const c1 = increment(); debugger;
const c2 = increment(); debugger;
const c3 = increment(); debugger;

console.log(c1, c2 ,c3);  // returns  1 2 3

// Whenever the createCounter() is called and inner
// function is expressed, the reference to values are SAVED
// So even is the lexical environment createCounter() is 
// destroyed, myFunction() will still have an access to the
// variable called => counter