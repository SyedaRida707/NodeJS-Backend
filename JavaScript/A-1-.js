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

// Q36 ------------------
// Why would we use: else if
// instead of multiple separate if statements?

// We use else if when we have multiple possible conditions, but only one result should run.
// JavaScript checks the conditions from top to bottom:
// If the first if is true → run it and stop.
// If it is false → check the else if.
// If that is also false → run else.

// With multiple separate if statements, each condition is checked separately, so more than one block can run.
// const grade = 90;
// if (grade >= 90) {
//     console.log("Genius");
// }
// if (grade >= 50) {
//     console.log("Medium");
// }

// Give an example involving student grades.
// const grade = 90;
// if (grade >= 90) {
//     console.log("Genius");
// } else if (grade >= 50) {
//     console.log("Medium");
// } else {
//     console.log("Doing hard work");
// }


// Q37 ------------------
// What is an array?
// An array is used to store multiple values in a single variable.

// Why would we use an array instead of creating separate variables like:
// Arrays make it easier to store and manage many related values together.

// let student1 = "Ali";
// let student2 = "Ahmed";
// let student3 = "Sara";
// const students = ["Ali", "Ahmed", "Sara"];

// Q38 ------------------
// Why does JavaScript use zero-based indexing for arrays?
// JavaScript arrays use zero-based indexing, which means the first item starts at index 0, not 1
// For:
// let fruits = ["Apple", "Banana", "Mango"];
// What is the index of each fruit?
// 0,1,2;

// Q39 ------------------
// What is an object in JavaScript?
// An object stores data in key-value pairs.

// Explain what properties are.
// A property is like a variable inside an object that stores a value

// For example:
// let student = {
//     name: "Ali",
//     age: 20
// };
// Identify:
// Object student
// Properties name , age
// Property values Ali , 20


// Q40 ------------------
// Explain the difference between an array and an object.

// Array
// Stores multiple values in an ordered list.
// Each value has an index (0, 1, 2, etc.).
// Use an array when you mainly need a list of items.

// Object
// Stores data as key-value pairs.
// Use an object when you want to describe something with details.

// When would you use:
// when we want just list not details
// ["Ali", "Ahmed", "Sara"]

// and when would you use:
// we used to to decribe details
// {
//     name: "Ali",
//     age: 20,
//     department: "Physics"
// }

// Q41 ------------------
// Student Result System : Create a JavaScript program using:

// let or const
// an object
// if / else if / else
// comparison operators
// The object should contain:

// name
// marks

// Print:

// "A" if marks ≥ 80
// "B" if marks ≥ 60
// "C" if marks ≥ 50
// "Fail" otherwise

// const student = {
//     name: 'Rida',
//     marks: 80
// }
// if (student.marks >= 80) {
//     console.log('A');
// } else if (student.marks >= 60) {
//     console.log('B');
// } else if (student.marks >= 50) {
//     console.log('C');
// } else {
//     console.log('Fail');
// }

// Q42 ------------------
// Login System
// Create a program with:

// let username = "admin";
// let password = "12345";
// Use && to check whether both username and password are correct.

// Print:
// Login Successful
// or
// Invalid Credentials

// let username = "admin";
// let password = "12345";
// if( username === 'admin' && password === '12345'){
//     console.log('Login Successful');
// }else{
//     console.log('Invalid Credentials');
// }

// Q43 ------------------
// University Admission
// Create an object:
// student

// containing:
// age
// marks
// hasEntryTest
// A student can be admitted only when:

// age ≥ 18
// marks ≥ 60
// entry test is passed
// Use && to implement the condition.

// const student = {
//     age: 18,
//     marks: 60,
//     hasEnteryTest: true
// }
// if (student.age >= 18 && student.marks >= 60 && student.hasEnteryTest) {
//     console.log('entry test is passed');
// }

// Q44 ------------------
// Product Eligibility
// Create an object:

// customer
// containing:

// age
// hasMembership
// hasCoupon
// A customer gets a special offer if:

// they are 18 or older AND
// they either have membership OR have a coupon.
// Use both:

// &&
// ||
// in your condition.

// const customer = {
//     age: 21,
//     hasMembership: true,
//     hasCoupon: false
// }
// if (customer.age >= 18 && (customer.hasMembership || customer.hasCoupon)) {
//     console.log('A customer gets a special offer');
// }

// Q45 ------------------
// Student Data
// Create an array containing at least 3 student objects.

// Each student should have:

// name
// age
// marks
// Example structure:

// let students = [
//     {
//         name: "...",
//         age: ...,
//         marks: ...
//     },
//     {
//         name: "...",
//         age: ...,
//         marks: ...
//     }
// ];
// Then write code to:

// Print the name of the first student.
// Print the marks of the second student.
// Check whether the third student passed.
// Print "Passed" if marks ≥ 50.
// Otherwise print "Failed".

// let students = [
//     {
//         name: "Muqsit",
//         age: 21,
//         marks: 70
//     },
//     {
//         name: "Mutib",
//         age: 14,
//         marks: 90
//     },
//     {
//         name: "Muhib",
//         age: 12,
//         marks: 60
//     }
// ];
// console.log(students[0].name);
// console.log(students[1].marks);
// if (students[2].marks >= 50) {
//     console.log("Passed");
// } else {
//     console.log("Failed");
// }

