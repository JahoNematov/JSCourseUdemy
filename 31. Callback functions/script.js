"use strict";

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function done() {
    console.log("I have completed this lesson.")
}


function learnJS(lang, callback) {
    console.log(`I am learning: ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log("I have completed this lesson.");
});

learnJS('JavaScript', done);