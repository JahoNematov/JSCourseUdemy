const usdCurr = 28;
const euroCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
    return amount * curr;
}

function promotion(result) {
    console.log(result * discount);
}

console.log(convert(500, usdCurr));
console.log(convert(500, euroCurr));
const res = convert(500, usdCurr);
promotion(res);

/* ------------------------------------------------- */

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 4) return;
    }
    console.log("You will never reach here!");
}

test();

/* -------------------------------------------------- */

function doNothing() {
    return;
}

console.log(doNothing() === undefined);




