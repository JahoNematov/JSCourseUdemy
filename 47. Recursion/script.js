"use strict";

// База рекурсии - случай который приведет немедленному возврату
// Шаг рекурсии - в нашем случае = 1
// Глубина рекурсии - в данном случае n

function pow(base, degree) {
    switch(degree) {
        case 0: return 1;
        case 1: return base;
        default: return base * pow(base, degree - 1);
    }
};

console.log(pow(2, 0));
console.log(pow(2, 4)); 
console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(2, 10));