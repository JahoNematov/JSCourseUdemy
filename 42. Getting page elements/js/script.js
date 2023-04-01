"use strict";

const box = document.getElementById("box");
console.log(box);


const buttons = document.getElementsByTagName("button");
const secondButton = buttons[1];
console.log(buttons);   // We will get HTMLCollection
console.log(secondButton);

// Note that even there is only one button in the page
// you will get a HTMLCollection!!!


const circles = document.getElementsByClassName('circle');
console.log(circles);  // Again you will get HTMLCollection


// The most popular way! You also can use forEach
const hearts = document.querySelectorAll(".heart");
// console.log(hearts);  // Returns NodeList

hearts.forEach(item => {
    console.log(item);
})


const oneHeart = document.querySelector(".heart");
console.log(oneHeart);  // retrieved only first element
console.log(hearts);


const firstDiv = document.querySelector("div");
console.log(firstDiv);