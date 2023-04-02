"use strict";

// How to work with before, after and parent elements of the target
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);


// Child nodes
console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);


// Parents, siblings and children
console.log("Finding parents, siblings and children")
const cntButton = document.querySelector("#current");
console.log(cntButton.parentElement);   // father
console.log(cntButton.parentElement.parentElement);   // grandfather
console.log(cntButton.previousElementSibling);   
console.log(cntButton.nextElementSibling);
console.log(cntButton.childNodes);
console.log(cntButton.children);


// Data attributes  ->  Using data current
console.log(document.querySelector("[data-current='3']"));


// All child elements of the body
console.log("All child elements of the body");
for (let node of document.body.childNodes) {
    if (node.nodeName === '#text') continue;
    console.log(node);
}