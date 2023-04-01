"use strict";

let number = 50;

// while loop
while (number <= 55) {
    console.log(number);
    number++;
}
console.log(`After first loop: ${number}`);


// do-while loop
do {
    console.log(number);
    number++
} while (number < 44);
console.log(`After second (do-while) loop: ${number}`);


// for loop
for (let i = 1; i < 10; i++) {
    console.log(i);
}
