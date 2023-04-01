"use strict";

const arr = [1, 2, 3];
const obj = {a: 1, b: 2};  // key-value format of storing the data

// Order does not matter!
const obj2 = {
    //Anna: 500 -> Is the same thing
    'Anna': 500,
    'Alice': 800,
}


// FUNCTIONAL DIFFERENCES

/*  Still you can treat a massive 
    as object. Massive is the one 
    specific case of object
*/
const array = ['a', 'b', 'c'];
const objArray = {
    0: 'a',
    1: 'b',
    2: 'c',
}

// Retrieving the data

console.log(array[2]);
// console.log(objArray.0);   generates an error
console.log(objArray[0]);

// Inserting a new data to the object
objArray.d = '1234';
objArray['e'] = '5678'; 

console.log(objArray.d);  // prints '1234
console.log(objArray['d']);  // same thing
console.log(objArray.e);  // prints 5678

// Inserting data to the array
array[10] = 'd';
console.log(array);  // prints [ 'a', 'b', 'c', <7 empty items>, 'd' ]

const students = {
    'IT': {
        'u12221': "Jahongir Nematov",
        'u12222': "Temur Gaybulloev"
    },
    'ME': {
        'u12223': "Bill Gates",
        'u12224': "Steve Jobs",
    },
    'CE': {
        'u12225': "Cal Newport",
        'u12226': "David Allen",
    }
}
console.log(students);