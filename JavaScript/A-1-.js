// Q1 ------------------
// var age = 20;
// let name = "Ali";
// const country = "Pakistan";

// console.log(age);
// console.log(name);
// console.log(country);

// Q2 ------------------
// let age = 20;
// age = 21;

// console.log(age);
//What happens if age was declared using const instead?
// const age = 20;
// age = 21;

// console.log(age);
// This causes an error because a const variable cannot be reassigned.

// Q3 ------------------
// Identify the problem in this code:

// const pi = 3.14;
// pi = 3.14159;

// console.log(pi);

// Will the program successfully execute?
// onst variables cannot be reassigned.

// Q4 ------------------
// What will be printed?

// var x = 10;
// var x = 20;

// console.log(x);

// Q5 ------------------
// Calculate the output:
// let a = 10;
// let b = 3;

// console.log(a + b);  // 13
// console.log(a - b);  // 7
// console.log(a * b);  // 30
// console.log(a / b);  // 3.333
// console.log(a % b);  // 1

// Q6 ------------------
// What will each line print?
// let age = 20;
// console.log(age > 18);  // true
// console.log(age < 18);  // false
// console.log(age == 20); // true
// console.log(age != 20); // false
// console.log(age >= 20); // ture
// console.log(age <= 19); // false


// Q7 ------------------
// console.log(5 == "5");
// console.log(5 === "5");
// Explain why the results are different.
// 5 == "5" → true because == compares the values and converts the string "5" into the number 5.
// 5 === "5" → false because === checks both the value and data type. One is a number and the other is a string.


// Q8 ------------------
// let age = 22;
// let hasID = true;
// console.log(age >= 18 && hasID);
// What happens if hasID becomes false?
// codition becomes false


// Q9 ------------------
// let hasMoney = false;
// let hasCard = true;
// console.log(hasMoney || hasCard);


// Q10 ------------------
// let isLoggedIn = false;
// console.log(!isLoggedIn);

// Q11 ------------------
// What will be printed?

// let age = 25;
// let hasLicense = true;

// if (age >= 18 && hasLicense) {
//     console.log("You can drive");
// } else {
//     console.log("You cannot drive");
// }

// Q12 ------------------
// let marks = 72;

// if (marks >= 80) {
//     console.log("A");
// } else if (marks >= 60) {
//     console.log("B");
// } else {
//     console.log("C");
// }

// Q13 ------------------
// let age = 20;
// let hasID = true;

// if (age >= 18) {
//     if (hasID) {
//         console.log("Entry allowed");
//     } else {
//         console.log("ID required");
//     }
// } else {
//     console.log("Underage");
// }

// Q14 ------------------
// What is the output?

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// console.log(fruits[0]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// Q15 ------------------
// What will the final array be?

// let numbers = [10, 20, 30];
// numbers[1] = 50;
// console.log(numbers);

// Q16 ------------------
// let marks = [45, 78, 90, 32];

// if (marks[1] >= 50) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

// Q17 ------------------
// let subjects = ["Physics", "Math", "Programming", "English"];
// console.log(subjects.length);

// Q18 ------------------
// let student = {
//     name: "Ahmed",
//     age: 21,
//     department: "Physics"
// };

// console.log(student.name);
// console.log(student.age);
// console.log(student.department);

// Q19 ------------------
// let student = {
//     name: "Ali",
//     age: 20
// };
// student.age = 21;
// console.log(student.age);

// Q20 ------------------
// let student = {
//     name: "Sara",
//     marks: 85
// };

// if (student.marks >= 50) {
//     console.log(student.name + " passed");
// } else {
//     console.log(student.name + " failed");
// }

// Q21 ------------------
// let students = [
//     { name: "Ali", age: 20 },
//     { name: "Sara", age: 22 },
//     { name: "Ahmed", age: 19 }
// ];

// console.log(students[1].name);
// console.log(students[2].age);

// Q22 ------------------
// let numbers = [
//     [10, 20],
//     [30, 40],
//     [50, 60]
// ];

// console.log(numbers[0][1]);
// console.log(numbers[2][0]);

// Q23 ------------------
// let age = 20;
// let student = true;
// let employee = false;

// if (age >= 18 && (student || employee)) {
//     console.log("Allowed");
// } else {
//     console.log("Not Allowed");
// }

// Q24 ------------------
// let username = "";

// if (username) {
//     console.log("Username exists");
// } else {
//     console.log("Username is empty");
// }

// Q25 ------------------
// The following code is supposed to print "Adult" when the person's age is 18 or above.
// Find and fix the error.

// let age = 20;

// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Not Adult");
// }


// Q26 ------------------
// Explain the difference between:
// var
// let
// const

// Keyword	       Can be reassigned?	     Example use
// var	          Yes ✅	                    Older JavaScript code
// let	          Yes ✅	                    A value that may change
// const	      No ❌	                    A value that should not change

// Give one situation where each could be used.
// var age = 20;
// var age = 19;
// age = 21;

// let age = 19;
// age = 20;

// const age = 19;


// Q27 ------------------
// Reassignment: What does reassignment mean in JavaScript?
// Which of the following can be reassigned?

// var
// let
// const
// Explain your answer.

// Reassignment means giving a new value to a variable that has already been declared.
// Which can be reassigned?
// var → ✅ Yes
// let → ✅ Yes
// const → ❌ No

// Q28 ------------------
// Explain the difference between: Declaration vs Assignment

// Declaration = creating/introducing a variable.
// Assignment = giving a value to a variable.

// Give a JavaScript example of each.
// let age;      // Declaration
// age = 20;     // Assignment


// Q29 ------------------
// What is an operator?
//a symbol used to calculate or compare/check values. 

// Explain the purpose of these operators:
// +	Addition	5 + 2 → 7
// -	Subtraction	5 - 2 → 3
// *	Multiplication	5 * 2 → 10
// /	Division	10 / 2 → 5
// %	Remainder	10 % 3 → 1
// >	Greater than	5 > 3 → true
// <	Less than	3 < 5 → true
// >=	Greater than or equal	5 >= 5 → true
// <=	Less than or equal	3 <= 5 → true
// ==	Equal value	5 == "5" → true
// ===	Equal value and type	5 === "5" → false
// !=	Not equal	5 != 3 → true
// !==	Not equal value or type	5 !== "5" → true

// Q30 ------------------
// What is the difference between:
// = , ==, ===

// = → Assignment: gives a value to a variable.
// == → Loose comparison: checks if values are equal, and can convert the type.
// === → Strict comparison: checks if both the value and type are equal.

// Give an example of where each one is used.
// let age = 20;
// console.log(age == '20');
// console.log(age === '20');

// Q31 ------------------
// Explain the logical AND operator: &&
// The && operator checks multiples conditions. The result is true only when BOTH conditions are true.

// When does an && condition become true?
// If even one condition is false, the whole condition becomes false.

// Give a real-life example.
// let hasID = true;
// let hasAdmitCard = true;

// if (hasID && hasAdmitCard) {
//     console.log("You can enter the exam");
// }


// Q32 ------------------
// Explain the logical OR operator: ||
// The || operator checks multiple conditions.
// The whole condition becomes true if at least ONE condition is true.
// It becomes false only when ALL conditions are false.

// When does an || condition become true?
// whole condition is true.

// Give a real-life example.
// let hasID = true;
// let hasAdmitCard = false;

// if (hasID || hasAdmitCard) {
//     console.log("You can enter the exam");
// }

// Q33 ------------------
// ! What does the logical NOT operator do?

// The ! operator reverses the boolean value.
// If the condition is true, ! makes it false.
// If the condition is false, ! makes it true.

// Explain what happens when:
// !true  // become false 
// !false // become true


// Q34 ------------------
// Explain the difference between:
// both condition must be true if not then codition become false
// age >= 18 && hasID
// and
// at least one condition is true if all false the condition become false
// age >= 18 || hasID

// Give a situation where each condition would make sense.
// const age = 18;
// const hasID = true;

// if (age >= 18 && hasID) {
//     console.log("You can enter");
// } else if (age >= 18 || hasID) {
//     console.log("You can enter a specific location");
// } else {
//     console.log("You cannot enter");
// }

// Q35 ------------------
// What is the purpose of an if statement?
// An if statement is used to check a condition.
// If the condition is true → the if block runs.
// If the condition is false → the else block runs.

// Explain how the following structure works:
// if statement true run the block if not run the else block

// if (condition) {
//     // code
// } else {
//     // code
// }
