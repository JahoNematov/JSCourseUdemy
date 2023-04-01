"use strict";

const hamburger = 3,
      cola = 0,
      fries = 1;

// Note that, inside of the chain of AND statements, if one of
// them becomes false, subsequent calculations will not be 
// performed

if (hamburger === 3 && cola === 1 && fries) {
    console.log("We are eating.");
} else {
    console.log("Let's find another place.")
}

console.log(hamburger === 3 && cola === 1 && fries);
console.log(hamburger === 3 && cola && fries);

console.log("Important and interesting part...");
console.log(1 && 0);
console.log(1 && 5);  // So the logical operators return not only boolean true/false
                      // but also the value that means true and false even if not boolean
                      // If chain ends successfully, it will return the last value of the chain
                      // Otherwise the first occurrence of the false 
console.log(null && 5);
console.log(0 && "ratata"); 


// NOT operator
console.log(!null);
console.log(!5);