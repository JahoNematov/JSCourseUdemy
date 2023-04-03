"use strict";

// This lesson involves optimisation funcionality

const p = document.querySelectorAll("p");
console.log(p);


function loadScript(src) {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("test.js");
loadScript("some.js");  // they will be loaded successively because we use async = false