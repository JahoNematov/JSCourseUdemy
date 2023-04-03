"use strict";

// There are 6 events on mobile devices

// touchstart -> event when you touch (simple touch)
// touchmove -> when you put finger and move it
// touchend -> when you release finger
// touchenter -> when you slide-in to element
// touchleave -> when you slide-of from element
// touchcancel -> when your finger gets out from browser scope

window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();
        
        console.log(event.touches);
        console.log("The button is touched.");
    })

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();
        console.log("Touch move!");
    })

    box.addEventListener("touchend", (event) => {
        event.preventDefault();
        console.log("Touch end");
    })

})

// Three main attributes of touch events
// touches -> number of fingers involved in event + their params
// targetTouches -> number of fingers that touch exactly this element
// changedTouches -> list of fingers that involve during this event
//                   For example if you put 3 fingers but leave 
//                   only one finger starting "touchend" event
//                   event.changedTouches will return only removed one