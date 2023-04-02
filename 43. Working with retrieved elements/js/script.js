"use strict";

const box = document.getElementById('box'),
      wrapper = document.querySelector(".wrapper"),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName("circle"),
    //   hearts = wrapper.querySelectorAll('.heart')
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');
      
// CSS styles will be written as inline css style

box.style.backgroundColor = '#323123';
box.style.width = "250px";
// box.style.cssText = "background-color: blue; width: 300px";


btns[1].style.borderRadius = "45%";

circles[0].style.backgroundColor = "red";

for (let item of circles) {
    item.style.backgroundColor = '#854472';
}

hearts.forEach(item => {
    item.style.backgroundColor = 'orange';
})


/* Let's work with methods */

const div = document.createElement('div');  // It will never we seen on the page
// const text = document.createTextNode("Here was I");  // Less used

div.classList.add('black');

document.body.append(div);

// Putting our div somewhere
// wrapper.prepend(div);
// wrapper.append(div);
// hearts[1].before(div);

// Removing elements
// circles[0].remove();

// Replacing elements
// hearts[0].replaceWith(btns[2]);



/* Old constructions*/
// wrapper.appendChild(div);   // same as append
wrapper.insertBefore(div, hearts[2]);  // element, child element
wrapper.removeChild(hearts[1]);
wrapper.replaceChild(btns[3], hearts[2]);



// Inner elements of div
div.innerHTML = "<h3><b>Hello World</b></h3>";
div.textContent = "<h3>Hello</h3>";  // Works only with text

div.insertAdjacentHTML('afterend', '<h4>Hello</h4>');
                    // beforebegin -> before element
                    // afterbegin -> same as prepend
                    // beforeend -> before closing tag
                    // afterend -> after element