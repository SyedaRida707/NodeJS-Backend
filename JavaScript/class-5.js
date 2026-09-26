// The function passed as an argument = Callback Function.
// A function that takes another function as an argument OR returns a function = Higher-Order Function.

// function b(a) {
//     console.log('b');
//     a();
// return a();
// }

// function c() {
//     console.log('c');
// }

// higher order function or decorative function or iska order 1 hai
// c is Callback function 
// b(c);
// b(c,d,e); to iska order 3 hai 

// --------------------------------------------------------

// jo . se start hote wo method hai js me
// let arr = [1, 2, 3];
// console.log(arr.push(4, 5));

// --------------------------------------------------------

// Exception Handling / Error Handling
// Exception Handling is the process of handling errors that occur while a JavaScript program is running.
// In JavaScript, try...catch is mainly used for exception handling.

// Exception Handling = Error Handling
// Both terms are commonly used for handling runtime errors.

// Why do we need Exception Handling?
// console.log("Start");
// console.log(x);
// console.log("End");
// The "End" code will not execute because the error stops normal execution.

// With exception handling:
// console.log("Start");

// try {
//     console.log(x);
// } catch (error) {
//     console.log("Something went wrong!");
// }

// console.log("End");
// So, catch handles the error and the program can continue.

// --------------------------------------------------------
// Built-in JavaScript Errors
// ReferenceError : Occurs when we use a variable that doesn't exist.
// console.log(x);

// TypeError : Occurs when we perform an invalid operation on a value/type.
// let num = 10;
// num.toUpperCase();

// let a = 1 + 1
// console.log(a.concat());

// SyntaxError : Occurs when JavaScript syntax is invalid.
// let a 10;



