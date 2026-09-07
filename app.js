// PA0203 – Describe Basic JavaScript Syntax

// 1. Variables
let studentName = "Aphiwe";
studentName = "Aphiwe Nkosi";
console.log("Variable example:", studentName);

// 2. Constants
const schoolName = "CodeTribe Academy";
console.log("Constant example:", schoolName);

// 3. Strings.
const greeting = "Hello, welcome to JavaScript!";
const firstName = "Mpho";
const fullName = firstName + " Mokoena";
console.log("String example:", greeting, fullName);

// 4. Numbers
let age = 19;
const price = 149.99;
const nextYearAge = age + 1;
console.log("Number example:", age, price, nextYearAge);

// 5. Booleans
let isLoggedIn = true;
const hasAccess = false;
console.log("Boolean example:", isLoggedIn, hasAccess);

// 6. Arrays
const subjects = ["JavaScript", "HTML", "CSS"];
const firstSubject = subjects[0];
console.log("Array example:", subjects, firstSubject);

// 7. Operators
const sum = 10 + 5;        
const difference = 20 - 8;  
const product = 6 * 4;     
const quotient = 50 / 2;   
const remainder = 15 % 4;   
const isEqual = 10 === 10;
console.log("Operator example:", sum, difference, product, quotient, remainder, isEqual);

// 8. Conditions
const score = 75;

if (score >= 80) {
  console.log("Condition example: Distinction");
} else if (score >= 50) {
  console.log("Condition example: Pass");
} else {
  console.log("Condition example: Fail");
}

