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

// example
// function greet(callback) {
//     callback();
//     console.log('hey users');
// }
// function sayBy() {
//     console.log('by users');
// }
// greet(sayBy);

// example
// function greet(callback){
//     //pass value
//     callback('Rida');
// }
//            //received value
// //anonymouse function jis ka koi name nhi hota 
// greet(function(n){
//     console.log(n);
// });
// //arrow function
// greet((n)=>{
//     console.log(n);
// });

//example
// function greet(c1, c2) {
//     c1('hello');
//     console.log('interval');
// }
// function child1() {
//     console.log('something');
// }
// greet((name) => {
//     console.log(name);
// });
// --------------------------------------------------------
// let a1 =[1,2,3,4,5];
// a1.forEach((value)=>{
// console.log(value);
// });

// let Something = a1.forEach((value)=>{
//     return value;
// });
// console.log(Something);


// let Something = a1.map((value)=>{
//     return value;
// });
// console.log(Something);


// let Something = a1.filter((value)=>{
//     return value % 2 === 0;
// });
// console.log(Something);

// what's the difference between forEach and map?

// Both forEach() and map() are array methods used to iterate over array elements.
// forEach() is used for performing an action,
// while map() is used for transforming elements and creating a new array.


// map, forEach, filter konsa kab apply karna kb use hote

// forEach() executes a function for each element of an array.

// It is used when we want to perform an action on each element.
// It does not return a new array.
// Its return value is undefined.
// Use forEach() when:You only want to perform an action, such as printing,
// updating the DOM, or calling a function.

// let arr = [1, 2, 3];
// let result = arr.forEach((v) => console.log(v * 2));

//Example
// execute function on each element array
// function greet(name) {
//     console.log("Hello " + name);
// }

// let names = ["Rida", "Atruba", "Qurat"];
// names.forEach((name) => {
//     greet(name);
// });

// map() creates a new array by transforming each element of the original array.
// It is used when we want to change/transform every element.
// It returns a new array.
// The original array is not changed.
//Use map() when: You want to transform every element and need the new array.

// let names = ["Rida", "Atruba", "Qurat"];
// let result = names.map((n) => {
//     return n.toUpperCase();
// });
// console.log('original array', names);
// console.log('transform array', result);


// filter() creates a new array containing only the elements that satisfy a condition.
// It is used to select specific elements.
// It returns a new array.
// The original array is not changed.
// Use filter() when:You want to select/remove elements based on a condition.

// let names = ["Rida", "ATRUBA", "QURAT"];
// let result = names.filter((n)=>{
//     // return n !== n.toUpperCase();
//     return n === n.toUpperCase();
// });
// console.log(result);

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
// --------------------------------------------------------
// what is optional chaining in js?
// Optional chaining is used to safely access a property or method of an object
// without getting an error if that property doesn't exist.

// It uses the ?. operator.
// const user = {
//     name: 'rida'
// }
// Without Optional Chaining ❌
// address = undefine, city = error
// console.log(user.address);
// console.log(user.address.city);
// Here address doesn't exist, so JavaScript gives: error

// With Optional Chaining ✅
// console.log(user.address?.city);

// address exist hai?
//    ↓ no
// undefined return karo

// "Agar address exist karta hai, to uski city do. Agar nahi karta, 
//  to error mat do, simply undefined return karo."

// const user = {
//     name: 'rida',
//     address :{
//         city : 'karachi'
//     }
// };
// console.log(user.address?.city);
// console.log(user.number?.phone);

// --------------------------------------------------------
//Single-Threaded vs Synchronous in JavaScript
// 1. Single-Threaded
// JavaScript is single-threaded, which means it has one main thread for executing JavaScript code.
// A thread is like a worker that executes code.

// One Main Thread
//       ↓
// Task 1
//       ↓
// Task 2
//       ↓
// Task 3

// It means JavaScript's main execution thread handles one piece of JavaScript code at a time.
//EXAMPLE
// console.log("A");
// console.log("B");
// console.log("C");

// 2. Synchronous
// Synchronous execution means code is executed in order, 
// and the next operation waits for the previous operation to finish.

// Example:
// console.log("A");
// console.log("B");
// console.log("C");

// Execution:
// A → complete
//       ↓
// B → complete
//       ↓
// C
// So, synchronous code follows a sequence.

// +++++++++++++++++++++++++++++++++++++++++++++
//Imagine one chef 👩‍🍳.
// Single-threaded
// There is one chef.

// 1 Chef
//    ↓
// Cooking Task : This represents one main thread.

// Synchronous
// The chef says: "I'll completely finish Task A, then I'll start Task B."
// Task A → Finish → Task B → Finish → Task C
// +++++++++++++++++++++++++++++++++++++++++++++

// --------------------------------------------------------

// callback alag tarike se deal hote js me?
// console.log('A');
// setTimeout(function(){
//     console.log('B come after 2 seconds');  
// },2000);
// console.log('C');

// --------------------------------------------------------

//what is callback hell?
//Callback Hell is a situation where multiple nested callbacks make asynchronous 
//code difficult to read, understand, and maintain.

//asynchronus example
// console.log('A');
// setTimeout(() => {
//     console.log('B');
// });
// console.log('C');

//callback hell synchronous banre asynchronus se
// setTimeout(() => {
//     console.log('callback hell 1');
//     setTimeout(() => {
//         console.log('callback hell 1');
//     }, 2000);
// }, 1000);

// Ye asynchronous kyun hai?
// Kyuki setTimeout() asynchronous operation hai.

// setTimeout()
//     ↓
// Browser/Web API timer handle karta hai
//     ↓
// 1 second wait
//     ↓
// callback execute

// Aur har next setTimeout() bhi asynchronous hai.
// --------------------------------------------------------