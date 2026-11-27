// 1---------------------
// Basic for Loop
// What will be the output?

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }



// 2----------------------
// Understanding the Counter
// What will be printed?

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// Why does this print 0 to 4 instead of 1 to 5?
//Because we initialize the counter i with 0 and set the condition to i < 5,
// which means the loop will continue as long as i is less than 5. When i becomes 5, the condition becomes false, so the loop stops.




// 3----------------------
// Increment by 2
// Predict the output:

// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }




// 4----------------------
// Countdown
// Write the output:

// for (let i = 5; i >= 1; i--) {
//     console.log(i);
// }
// What is the purpose of i--?
// i-- means decrementing the value of i by 1 after every iteration of the loop.


// 5------------------------
// Loop + Condition
// What will be printed?

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }




// 6------------------------
// Loop + &&
// Predict the output:

// for (let age = 15; age <= 22; age++) {
//     if (age >= 18 && age <= 20) {
//         console.log(age);
//     }
// }



// 7------------------------
// Loop + ||
// What will be printed?

// for (let i = 1; i <= 10; i++) {
//     if (i === 3 || i === 7) {
//         console.log(i);
//     }
// }





// 8---------------------------
// continue
// Predict the output:

// for (let i = 1; i <= 5; i++) {

//     if (i === 3) {
//         continue;
//     }

//     console.log(i);
// }
// Why isn't 3 printed?
// Because when i is equal to 3, the continue keyword skips
// the current iteration and moves to the next iteration of the loop.





// 9------------------------------
// break
// What will be printed?

// for (let i = 1; i <= 10; i++) {

//     if (i === 6) {
//         break;
//     }

//     console.log(i);
// }
// What is the difference between break and continue?
// continue: Skips the current iteration and moves to the next iteration of the loop.
// break: Immediately terminates the entire loop and does not execute further iterations.




// 10-----------------------
// while Loop
// Predict the output:

// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }
// What would happen if i++ were removed?
// "If i++ is removed, the loop becomes an infinite loop because the
// value of i never changes, so the condition i <= 5 always remains true."



// 11----------------------------
// while + Condition
// What will be printed?

// let number = 1;

// while (number <= 10) {

//     if (number % 2 !== 0) {
//         console.log(number);
//     }

//     number++;
// }




// 12---------------------------
// do...while
// What will be printed?

// let i = 10;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);
// Why does the loop execute even though i < 5 is false?
// "The do...while loop executes at least once, even if the condition is false,
// because the condition is checked after executing the loop body.






// 13--------------------
// Array + for Loop
// Predict the output:

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// Why is fruits.length useful here?
// fruits.length is useful because we don't always know
// how many elements are present in an array. It automatically
// returns the total number of elements in the array, so we don't
// need to hardcode the loop condition.





// 14------------------------
// Array + Condition
// What will be printed?

// let marks = [45, 72, 33, 90, 61];

// for (let i = 0; i < marks.length; i++) {

//     if (marks[i] >= 50) {
//         console.log(marks[i]);
//     }
// }






// 15-----------------------
// Array + Function + Loop
// What will be printed?

// function printNumber(number) {
//     console.log("Number:", number);
// }

// let numbers = [10, 20, 30];

// for (let i = 0; i < numbers.length; i++) {
//     printNumber(numbers[i]);
// }
// Explain how the loop and function work together.
// The loop iterates through each element of the array. In every iteration,
// it calls the printNumber() function and passes the current array
// element as an argument. The function receives that value and prints it.






// 16--------------------------
// Calculate Total
// Predict the output:

// let numbers = [10, 20, 30, 40];

// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
// }

// console.log(total);
// What is the purpose of total = 0 before the loop?
// total = 0 initializes the total variable with 0. During each iteration,
// the loop adds the current array element to the previous total and updates the total variable.





// 17------------------------
// Find the Largest Number
// What will be printed?

// let numbers = [10, 45, 23, 78, 12];
// let largest = numbers[0];
// for (let i = 1; i < numbers.length; i++) {

//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }
// console.log(largest);

// Trace the value of largest as the loop runs.
// Initially, the largest variable stores the first element of the array,
// which is 10. The loop compares each element with the current largest value.
// First, largest becomes 45, and then it becomes 78 because 78 is greater than 45.
// Finally, the largest number is 78.





// 18----------------------
// Array + Objects
// Predict the output:

// let students = [
//     { name: "Ali", marks: 70 },
//     { name: "Sara", marks: 85 },
//     { name: "Ahmed", marks: 45 }
// ];

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name);
// }







// 19-------------------------------
// Array of Objects + Condition
// What will be printed?

// let students = [
//     { name: "Ali", marks: 70 },
//     { name: "Sara", marks: 85 },
//     { name: "Ahmed", marks: 45 }
// ];

// for (let i = 0; i < students.length; i++) {

//     if (students[i].marks >= 50) {
//         console.log(students[i].name);
//     }
// }







// 20-----------------------------
// Function + Array of Objects + Loop
// What will this program print?

// function checkResult(student) {

//     if (student.marks >= 50) {
//         return "Pass";
//     } else {
//         return "Fail";
//     }
// }

// let students = [
//     { name: "Ali", marks: 70 },
//     { name: "Sara", marks: 45 },
//     { name: "Ahmed", marks: 80 }
// ];

// for (let i = 0; i < students.length; i++) {
//     console.log(
//         students[i].name,
//         checkResult(students[i])
//     );
// }







// 21----------------------------
// Nested Loop
// Predict the output:

// for (let i = 1; i <= 3; i++) {

//     for (let j = 1; j <= 2; j++) {
//         console.log(i, j);
//     }
// }

// How many times does the inner loop execute in total?
//  it will execute totally 6 times






// 22------------------------------
// Nested Loop + Condition
// What will be printed?

// for (let i = 1; i <= 3; i++) {

//     for (let j = 1; j <= 3; j++) {

//         if (i === j) {
//             console.log(i, j);
//         }
//     }
// }








// 23--------------------------
// Nested Array
// Predict the output:

// let numbers = [
//     [10, 20],
//     [30, 40],
//     [50, 60]
// ];

// for (let i = 0; i < numbers.length; i++) {

//     for (let j = 0; j < numbers[i].length; j++) {
//         console.log(numbers[i][j]);
//     }
// }

// Explain why two loops are needed.
// Because it is a 2D array, we need two loops. The outer loop iterates
// through the main array (rows), and the inner loop iterates through
// the nested arrays (elements inside each row)





// 24------------------------------
// break + Array Search
// What will be printed?

// let numbers = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length; i++) {

//     if (numbers[i] === 30) {
//         console.log("Found");
//         break;
//     }

//     console.log(numbers[i]);
// }
// Why is break useful in this situation?
// break is useful when we find the element we are searching for
// and don't want to execute the remaining iterations of the loop.





// 25------------------------------
// Complete Trace
// Predict the exact output:

// function processStudents(students) {

//     for (let i = 0; i < students.length; i++) {

//         if (students[i].marks < 50) {
//             continue;
//         }

//         if (students[i].marks >= 80) {
//             console.log(students[i].name, "Excellent");
//         } else {
//             console.log(students[i].name, "Passed");
//         }
//     }
// }

// const students = [
//     { name: "Ali", marks: 85 },
//     { name: "Sara", marks: 45 },
//     { name: "Ahmed", marks: 70 },
//     { name: "Usman", marks: 92 }
// ];

// processStudents(students);

// Explain:
// Why Sara isn't printed.
// Because her marks are less than 50, the continue keyword skips her iteration,
// so her name is not printed.

// Why Ali gets "Excellent".
// Because his marks are greater than or equal to 80, he gets 'Excellent'.

// Why Ahmed gets "Passed".
// Because his marks are less than 80 but greater than or equal to 50, he gets 'Passed'.

// Why Usman gets "Excellent".
// Because his marks are greater than or equal to 80, he gets 'Excellent'.





// 26.-------------------------
// What is a loop?
// A loop is used to execute a block of code multiple times

// Why do programmers use loops instead of writing:
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// Because loops save time, reduce code repetition, and make the code easier to read and maintain





// 27----------------------------
// for Loop
// Explain each part of:

// for (let i = 0; i < 10; i++) {
//     // code
// }

// Explain:
// Initialization
// Initialization means declaring and assigning an initial value to the loop counter variable.

// Condition
// The condition checks whether the given condition is true or false.
// If it is true, the loop continues. If it is false, the loop stops

// Increment
// Increment increases the value of the loop counter by 1 after each iteration.

// Loop body
// The loop body contains the code that executes whenever the condition is true






// 28----------------------------
// What is a while loop?
// A while loop is used to execute a block of code repeatedly
// as long as the given condition is true.

// When would you choose a while loop instead of a for loop?
// We use a while loop when we don't know in advance how many times the loop needs to execute.




// 29-----------------------------
// What is the major difference between:
// while loop:
// "A while loop checks the condition before executing the loop body.
// If the condition is true, the loop executes; otherwise, it doesn't execute."

// do...while loop:
// "A do...while loop executes the loop body at least once,
// even if the condition is false, because it checks the condition after execution."

// while (condition)
// and:

// do {

// } while (condition);






// 30---------------------------
// Infinite Loops
// What is an infinite loop?
// An infinite loop is a loop that continues executing forever
// because its condition never becomes false

// Why would this code be problematic?
// Because the value of i is never incremented, the condition i <= 10 always remains true,
// resulting in an infinite loop.

// How can you fix it?
// We can fix it by incrementing the value of i using i++ inside the loop.




// 31----------------------------
// What does break do inside a loop?
// The break statement immediately terminates the entire loop,
// and no further iterations are executed.

// Give a practical situation where using break makes sense.
// for (let r = 0; r <= 10; r++) {
//     if (r === 5) {
//         break;
//     }
//     console.log(r);
// }






// 32---------------------------
// What does continue do?
// The continue statement is used inside a loop to skip the current
// iteration and move to the next iteration

// Explain the difference between: break and continue
// The break statement immediately terminates the entire loop, and no further iterations are executed.
// The continue statement skips the current iteration and moves to the next iteration of the loop.




// 33---------------------------
// Loop + Array
// Why is this pattern so common?
// This pattern is commonly used because it allows us to access
// and process each element of an array using a loop.

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// Explain the relationship between:
// index ,i ,array.length ,array[i]

// An index represents the position of an element in an array.
// We use the index to access a specific element.Array indexing starts from 0.

// i is the loop counter variable that represents the current index during each iteration.

// array.length returns the total number of elements in an array.
// It is useful when we don't know how many elements are present in the array.

// array[i] accesses the current array element using the value of the loop counter i as its index.






// 34. Loop + Condition
// Why are loops and conditions commonly used together?
// Loops and conditions are commonly used together when we
// want to go through multiple elements and check which elements meet a specific condition.

// Give a real-world example such as:
// "Go through all students and find students who passed."
// const students = [
//     { name: 'MUQSIT', marks: 550 },
//     { name: 'MUTIB', marks: 450 },
//     { name: 'MUHIB', marks: 250 }
// ]
// for (let i = 0; i < students.length; i++) {
//     if (students[i].marks >= 250) {
//         console.log(students[i].name, 'passed');
//     }
// }


// Explain how the loop and condition divide the work.
// The loop iterates through all students one by one, while the condition
// checks whether each student's marks meet the required criteria.
// If the condition is true, the student's name is printed.





// 35. Accumulator
// What is an accumulator variable?
// An accumulator is a variable that stores and updates a
// running total during each iteration of a loop.


// Explain this:

// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
// }

// Why does total start at 0?
// We use 0 as the starting value because adding 0 does not change the value of a number.




// 36. Nested Loops
// What is a nested loop?
// A nested loop is a loop inside another loop.
// Outer loop: Controls how many times the inner loop will run.
// Inner loop: Runs completely for every single iteration of the outer loop.

// Explain this structure:

// for (...) {

//     for (...) {

//     }
// }
// Give one real-world example where nested loops could be useful.
// for (let i = 0; i <= 3; i++) {
//     for (let j = 0; j <= i; j++) {
//         console.log(i, j);
//     }
// }





// 37. Functions + Loops
// Why might we put a loop inside a function?
// We put a loop inside a function to make the code reusable.
// Whenever we need to print student names, we can simply call the function.

// For example:
// function printStudents(students) {
//     for (let i = 0; i < students.length; i++) {
//         console.log(students[i]);
//     }
// }

// What advantage does this provide?
// It provides code reusability and reduces code repetition.





// 38. Arrays of Objects
// Why is this structure useful in real applications?
// We use an array of objects when we want to store information
// about multiple students in one array.

// let students = [
//     {
//         name: "Ali",
//         age: 20,
//         marks: 80
//     },
//     {
//         name: "Sara",
//         age: 21,
//         marks: 90
//     }
// ];

// How can a loop process all these students?
// A loop uses the array's index to access each student object one by one.




// 39. Choosing the Right Loop
// Explain when you might use:
// i use for loop when i know number of iteration

// We use a while loop when we don't know the number of iterations in advance.
// It continues running as long as the condition is true.

// We use a do...while loop when we want the code to execute at least once,
// even if the condition is false.

// for ,while ,do...while

// Give one example for each.
// for(let a = 1; a<=5; a++){
//     console.log(a);
// }


// let a = 1;
// while(a<=5){
//  console.log(a);
//     a++;
// }


// let a = 1;
// do {
//     console.log(a);
//     a++
// } while (a <= 5);




// 40. Connected Concepts
// Explain how the following concepts can work together in a real program:
// These six concepts work together in a program. Variables store data,
// arrays store multiple values, objects organize related information,
// conditions make decisions, loops process data repeatedly, and functions make code reusable.

// variables
//       ↓
// arrays
//       ↓
// objects
//       ↓
// conditions
//       ↓
// loops
//       ↓
// functions

// Give one example of a program that could use all six.
// let family = [
//     { name: 'Atruba' },
//     { name: 'Rida' },
//     { name: 'Muqsit' },
//     { name: 'Mutib' },
//     { name: 'Muhib' }
// ];

// function Students(names) {
//     for (let i = 0; i < names.length; i++) {
//         console.log('Before Name ', names[i]);
//         if (names[i].name[0] === names[i].name[0].toUpperCase()) {
//             console.log('After ', names[i].name.toUpperCase());
//         }
//     }
// }
// Students(family)



// ================PRACTICAL QUESTIONS==================

// 41. Student Result Processing System
// Create an array of at least 5 student objects:

// let students = [
//     {
//         name: "Ali",
//         marks: 75
//     },
//     // more students
// ];


// Create a function:
// getGrade(marks)
// The function should return:
// A → 80+
// B → 60–79
// C → 50–59
// Fail → below 50


// Then use a loop to print:
// Ali - B
// Sara - A
// Ahmed - Fail


// You must use:
// Array
// Objects
// Function
// Loop
// if / else if / else




// let students = [
//     {
//         name: "Hafsa",
//         marks: 80
//     },
//     {
//         name: "Sahoon",
//         marks: 75
//     },
//     {
//         name: "Maria",
//         marks: 40
//     },
//     {
//         name: "Qurat",
//         marks: 95
//     },
//     {
//         name: "Raima",
//         marks: 50
//     }
// ];
// function getGrade(S_mark) {
//     if (S_mark >= 80) {
//         return 'A'
//     } else if (S_mark >= 60 && S_mark <= 79) {
//         return 'B'
//     } else if (S_mark >= 50 && S_mark <= 59) {
//         return 'C'
//     } else {
//         return 'Fail'
//     }
// }

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name, getGrade(students[i].marks));
// }





// 42. Find Students Who Meet Multiple Conditions
// Create an array of student objects containing:

// name
// age
// marks
// hasEntryTest
// Use a loop to find students who satisfy all of these:

// age >= 18
// marks >= 60
// hasEntryTest === true
// Use &&.

// Print: Ali is eligible
// for every eligible student.


// let students = [
//     {
//         name: "Hafsa",
//         marks: 80,
//         age: 21,
//         hasEnteryTest: true
//     },
//     {
//         name: "Sahoon",
//         marks: 75,
//         age: 19,
//         hasEnteryTest: true
//     },
//     {
//         name: "Maria",
//         marks: 40,
//         age: 18,
//         hasEnteryTest: true
//     },
//     {
//         name: "Qurat",
//         marks: 95,
//         age: 32,
//         hasEnteryTest: true
//     },
//     {
//         name: "Raima",
//         marks: 50,
//         age: 25,
//         hasEnteryTest: true
//     }
// ];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].age >= 18 && students[i].marks >= 60 && students[i].hasEnteryTest === true) {
//         console.log(students[i].name, 'is eligible');

//     } else {
//         console.log(students[i].name, 'is not eligible');

//     }
// }




// 43. Shopping Cart
// Create an array:

// let cart = [
//     {
//         name: "Laptop",
//         price: 100000,
//         quantity: 1
//     },
//     {
//         name: "Mouse",
//         price: 2000,
//         quantity: 2
//     }
// ];

// Create a function:
// calculateTotal(cart)

// Use a loop to calculate:
// price × quantity
// for every product.

// Return the final total.
// Example:

// Laptop → 100000
// Mouse → 4000
// Total → 104000

// let cart = [
//     {
//         name: "Laptop",
//         price: 100000,
//         quantity: 1
//     },
//     {
//         name: "Mouse",
//         price: 2000,
//         quantity: 2
//     }
// ];
// let total = 0;
// function calculateTotal(product) {
//     for (let p = 0; p < product.length; p++) {
//         let productTotal = product[p].price * product[p].quantity;
//         total += productTotal;
//         console.log(`${product[p].name} -> ${total}`);
//     }
//     return total
// }
// const result = calculateTotal(cart)
// console.log('Total ->', result);




// 44. Number Analyzer

// Create a function:
// analyzeNumbers(numbers)

// Given:
// let numbers = [10, 15, 22, 7, 30, 41, 50];

// Use a loop to calculate:
// Total numbers
// Sum
// Number of even numbers
// Number of odd numbers
// Largest number
// Smallest number

// Use appropriate conditions and variables.
// Do not use built-in functions such as Math.max() or Math.min() for finding largest/smallest.

// let numbers = [10, 15, 22, 7, 30, 41, 50];
// function analyzeNumbers(nums) {
//     let totalNums = 0;
//     let Sum = 0;
//     let Even = 0;
//     let odd = 0;
//     let largest = numbers[0];
//     let small = numbers[0];

//     for (let i = 0; i < nums.length; i++) {

//         Sum = Sum + nums[i];
//         totalNums++;

//         if (nums[i] % 2 === 0) {
//             Even++;
//             // console.log(nums[i]);

//         } else {
//             odd++;
//             // console.log(nums[i]);

//         }

//         if (nums[i] > largest) {
//             // largest = nums[i];
//             // console.log('l', largest);

//         }
//         if (nums[i] < small) {
//             small = nums[i];
//             // console.log('S', small);

//         }
//     }
//     return { totalNums, Sum, Even, odd, largest, small}
// }

// const result = analyzeNumbers(numbers);
// console.log(result);





// 45. Mini Student Management System
// Build a small program using everything you've learned so far.

// Create an array of student objects:

// let students = [
//     {
//         name: "Ali",
//         age: 20,
//         marks: 85
//     },
//     {
//         name: "Sara",
//         age: 19,
//         marks: 72
//     }
// ];

// Create functions such as:
// printStudents()
// getGrade()
// findStudent()
// calculateAverage()
// highestScore()
// passingStudent()
// addStudent()

// Your program should be able to:
// 1. Print all students
// Use a loop.

// 2. Print grades
// Use a function + condition.

// 3. Find a student
// Search through the array using a loop.

// 4. Calculate average marks
// Use a loop and accumulator.

// 5. Find the highest scorer
// Use a loop and condition.

// 6. Check passing students
// Use a condition such as:
// marks >= 50


// 7. Add Students

// 8. Use break
// Stop searching once the requested student is found.


// let students = [
//     {
//         name: "Ali",
//         age: 20,
//         marks: 85
//     },
//     {
//         name: "Sara",
//         age: 19,
//         marks: 70
//     },
//     {
//         name: "maria",
//         age: 20,
//         marks: 92
//     },
//     {
//         name: "rida",
//         age: 21,
//         marks: 52
//     }
// ];

// // Print all student
// function printStudents(student) {
//     for (let i = 0; i < student.length; i++) {
//         console.log(student[i].name);
//     }
// }
// printStudents(students);


// // print grades of students
// function getGrade(student) {
//     for (let i = 0; i < student.length; i++) {
//         if (student[i].marks >= 80) {
//             console.log('A');

//         } else if (student[i].marks >= 60) {
//             console.log('B');

//         } else if (student[i].marks >= 50) {
//             console.log('C');

//         } else {
//             console.log('Fail');

//         }
//     }
// }
// getGrade(students)


// // find student
// function findStudent(student) {
//     for (let i = 0; i < student.length; i++) {
//         if (student[i].name === 'rida') {
//             console.log('Found', student[i].name);
//             break;
//         }
//     }
// }
// findStudent(students)


// // calculate average marks
// function calculateAverage(student) {
//     let total = 0;
//     for (let i = 0; i < student.length; i++) {
//         total = total + student[i].marks
//     }
//     let avg = total / student.length;
//     console.log(avg);
// }
// calculateAverage(students)



// // find highest scorer
// let highest = students[0].marks
// function highestscorer(student) {
//     for (let i = 0; i < student.length; i++) {
//         if (student[i].marks > highest) {
//             highest = student[i].marks
//             console.log(highest);
//         }
//     }
// }
// highestscorer(students)




// // check passing students
// function passingStudent(student) {
//     for (let i = 0; i < student.length; i++) {
//         if (student[i].marks >= 50) {
//             console.log(student[i].name, 'is passing');
//         } else {
//             console.log(student[i].name, 'is Fail');
//         }
//     }
// }
// passingStudent(students);




// // addstudents in existing array
// function addStudent(student) {
//     students.push(...student)
// }
// addStudent([{ name: 'atruba', marks: 78, age: 22 }, { name: 'mama', marks: 78, age: 22 }])
// console.log(students);

