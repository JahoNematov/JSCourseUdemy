"use strict";

console.log("Copy by value!");
let a = 5,
    b = a;

b = b + 5;

console.log(`a => ${a}`);
console.log(`b => ${b}`);

/* --------------------- */

console.log("\nCopy by reference!");
const obj = {
    a: 5,
    b: 1
};
const copy = obj;
const copyByValue = copyObject(obj);

obj.a = 10;

console.log(obj);
console.log(copy);
console.log(copyByValue);


// How to solve problem with copy with references
function copyObject(mainObj) {
    let result = {};
    for (let key in mainObj) {
        result[key] = mainObj[key];
    }
    return result;
}


// Problem of this version
console.log("\nProblem of first solution:");
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
const newNumbers = copyObject(numbers);

numbers.a = 10;
numbers.c.x = 99;

console.log(numbers);
console.log(newNumbers);
console.log("The nested object is copied by reference!")


// Merging several objects
console.log("\nMerging several objects.")
const add = {
    d: 12,
    e: 20,
};

console.log(Object.assign(numbers, add));


// Nice way of copying the objects
console.log("\nNice way of copying the objects");
const clone = Object.assign({}, add);
add.d = 100;
console.log(add);
console.log(clone);


// Copying arrays
console.log("\nCopying arrays");
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();  

oldArray[1] = 'Because';
console.log(oldArray);
console.log(newArray);


// Spread operator
console.log("\nUsing spread operator");
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
    
console.log(internet);


//
console.log("\nUtility of spread operator")
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num =[2, 5, 7];
log(num);
log(...num);



// Copying using spread
console.log("\nCopying arrays using spread:");
const array = ['a', 'b', 'c'];
const newAarray = [...array];

console.log(array);
console.log(newAarray);

console.log("\nCopying objects using spread:")
const q = {
    one: 1,
    two: 2
};
const newObj = {...q};
console.log(q);
console.log(newObj);