const usdCurr = 28;
const euroCurr = 32;


function convert(amount, curr) {
    return amount * curr;
}


console.log(convert(500, usdCurr));
console.log(convert(500, euroCurr));
