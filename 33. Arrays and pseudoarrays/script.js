"use strict";

const arr = [1, 2, 3, 4, 5];
console.log(`Original array: ${arr}`);

const lastItem = arr.pop();
console.log(`Removing the last item: ${lastItem}`);
console.log(`After removal: ${arr}`);

arr.push(6);
console.log(`After pushing the value 6: ${arr}`);

// Note that during addition or removal the data to the beginning
// may const a lot of computation resources, as you need to iterate
// through all of the items of the array;

console.log("\nUsing simple \"for\" structure:")
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("\nUsing \"for-of\" structure:");  // for-of is used for massive-like objects
for (let item of arr) {
    console.log(item);
}

console.log("\nUsing \"for-each\" structure") ;
arr.forEach(function(item, index, arr) {
    console.log(`Item № ${index} : ${item} -> indside of array: [${arr}]`);
})


// The additional functionality of for-of structure is, that there you can 
// use break and continue. This makes them different and if you do not use
// continue or break, use forEach structure!


// Methods: split, join and sort
console.log("\nUsing split, join and sort...");
const msg = "banana, apple, pineapple, peach, tomato";
const products = msg.split(', ');
console.log(`Extracted items with delimiter = ('): [${products}]`);
console.log(`Joined items with delimiter = (;) : [${products.join("; ")}]`);
console.log(`Sorting array elements: [${products.sort()}]`);


// Sorting using callback

console.log("Sorting using sort and callback:");
console.log(arr.sort(compareValues));
console.log(arr.sort(compareValuesInverse));

function compareValues(a, b) {
    return a - b;
}

function compareValuesInverse(a, b) {
    return b - a;
}
