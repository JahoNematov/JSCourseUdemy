"use strict";

// alert("Hello World")  // used for informing the user. 

// let result = confirm("Do you agree with license agreement?");
// console.log(result);
//                     // Question               // Default answer
// let answerName = prompt("Enter your first name:", "John Doe");
// console.log(answerName);
// console.log(typeof(answerName));  // prints 'string'

// let answerAge = prompt("Enter your age: ", "18");
// console.log(answerAge);
// console.log(typeof(answerAge));  // prints 'string'

// let wholeAnswer = answerName + " " + answerAge;
// console.log(wholeAnswer);

const answers = [];

answers[0] = prompt("Enter your first and last name: ", "John Doe");  // VsCode can not read this. Only browser understands this
answers[1] = prompt("Enter your age: ", '18');
answers[2] = confirm("Are you married?");

console.log(answers);
console.log(typeof(answers))
document.write(answers);  // rewrites the content of the page (not in this case, probably will see later)