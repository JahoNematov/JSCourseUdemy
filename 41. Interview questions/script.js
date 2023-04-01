"use strict";

// 1) 
let x = 5;
alert(x++); // post-fix does increment after returning previous value
            // so ANSWER = 5;

// 2)
console.log([] + false);  // empty array is turned to ''
console.log(typeof([] + false)); // ==> 'false'
console.log([] + false - null);  // NaN  -> because we performed non mathematical operation

// 3)
let y = 1;
let z = y = 2;  // Goes from right -> left
alert(z);  // ANSWER

// 4)
console.log([] + 1 + 2);  // ANSWER = '12';

// 5)
alert("1"[0]);  // ANSWER = 1
alert("Hello"[4]);  //ANSWER = 'o'

// 6)
console.log(2 && 1 && null && 0 && undefined);  // ANSWER = null

// 7)
let a = b = 1;
console.log(!!(a && b) === (a && b))   // !!(a && b) here !! converts other part to BOOLEAN
                                       // and BOOLEAN type value is not equal to NUMBER

// 8)
alert(null || 2 && 3 || 4);  // ANSWER = 3

// 9)
const arr1 = [1, 2, 3],
      arr2 = [1, 2, 3];
console.log(arr1 == arr2);  // ANSWER = false. Because they are different data storages

// 10)
alert(+"Infinity");  // Unary + turns "Infinity" to NUMBER

// 11)
console.log("Ёжик" > "яблоко");  // False

// 12)
console.log(0 || "" || 2 || undefined || true || false);  // ANSWER = 2
