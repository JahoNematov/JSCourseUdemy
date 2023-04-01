"use strict";

const options = {
    name: "Cube",
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
}
console.log(options.name);

// Deleting attributes
delete options.name;
console.log(options);


// Iterating over attributes (lkey pairs)
for (let key in options) {
    console.log(`${key} -> ${options[key]}`);
}
console.log();

// More advanced level
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        console.log(`${key} -> `);
        for (let key2 in options[key]) {
            console.log(`   ${key2} -> ${options[key][key2]}`)
        }
    } else {
        console.log(`${key} -> ${options[key]}`);
    }
}




// Methods of Objects
console.log();
console.log(Object.keys(options));
console.log(Object.keys(options).length);

