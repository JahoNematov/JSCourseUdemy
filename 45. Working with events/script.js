"use strict";

// Events are -> clicks, hovers....
// Обработчик -> function which is called when specific event occurred

const btn = document.querySelector("button"),
      overlay = document.querySelector(".overlay");


// The problem is that it is limited
// You can not delete them for example. Also the second declaration erases previous one
// btn.onclick = function() {
//     alert("The button is pressed!");
// }

// Better ways
btn.addEventListener('click', () => {
    alert("The button is PRESSED!!!");
});

btn.addEventListener('mouseenter', (e) => {
    console.log(e);   // important params are target and type
    e.target.style.backgroundColor = 'red';
    console.log(e.target);
    console.log(e.type);
    console.log("Hover");
});

btn.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'green';
})

// Another way + functionality of using for multiple listeners
const deleteElement = (e) => {
    // console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
}

let i = 0;
const clickCount = (e) => {
    i++;
    console.log(`Button is clicked ${i} times.`);
    if (i == 5) {
        e.target.removeEventListener('click', clickCount);
    }
};

const btns = document.querySelectorAll('button'),
      secondBtn = btns[1];

secondBtn.addEventListener('click', deleteElement);
// secondBtn.addEventListener('click', clickCount);
overlay.addEventListener('click', deleteElement);


/* Removing standard browser behavior */

const link = document.querySelector("a");
link.addEventListener('click', (event) => {
    event.preventDefault();
    event.target.href = "#";
    event.target.textContent = "Who are you?";
});


/* adding events to many elements */

const buttons = document.querySelectorAll("button");
buttons.forEach(item => {
    item.addEventListener("mouseenter", (event) => {
        console.log(`Entering ${event.target}`);
    });
    item.addEventListener("mouseleave", (event) => {
        console.log(`Leaving ${event.target}`);
    });
})


// Adding option
// target.addEventListener('click', function, once);  => this makes event listener work only one time!