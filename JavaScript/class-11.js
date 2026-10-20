// Acces Modifier -> public -> private -> protected.
// #balance -> private variable -> class attribute
// getter -> find , setter -> values set.
// class can access private variable but object can't.

// set and get keyword in encapsulation.
// - Getter (get): Private value ko read karne ka tareeqa.
// - Setter (set): Private value ko update karne ka tareeqa.

// class Bank {
//   #balance = 1000;

//   get balance() {
//     return this.#balance;
//   }

//   set balance(value) {
//     return this.#balance = value;
//   }
// }

// let account = new Bank();

// console.log(account.balance); // 1000 // Getter

// account.balance = 1500;       // Setter
// console.log(account.balance); // 2000

// --------------------------------------------------------------

// What is Event Loop?
// Definition: Event Loop is a mechanism in JavaScript that helps execute asynchronous callbacks when the Call Stack is empty.

// How it works:
// 1. JavaScript executes code in the Call Stack.
// 2. Asynchronous callbacks wait in a queue.
// 3. When the Call Stack is empty, the Event Loop helps move callbacks to the Call Stack for execution.

// Example:
// console.log("One");

// setTimeout(() => {
//     console.log("Two");
// }, 0);

// console.log("Three");

// Output:
// One
// Three
// Two

// Remember: Event Loop helps JavaScript handle asynchronous tasks.

// --------------------------------------------------------------

// What is Thread Pool?
// Definition: A Thread Pool is a group of reusable threads that execute tasks.

// Purpose: It helps handle certain background tasks efficiently.

// Example: Node.js uses a Thread Pool for some file system operations and other tasks.

// Remember: Event Loop callbacks ko manage karne mein help karta hai, 
// jabke Thread Pool kuch tasks ko background mein execute karta hai.

// Easy words mein, Thread Pool multiple threads ka group hota hai jo tasks ko execute karne ke liye ready rehta hai.

// JavaScript mein Node.js kuch time-consuming tasks, jaise file system operations, ke liye libuv ke 
// Thread Pool ka use kar sakta hai.

// Example
// Socho ek restaurant mein 4 workers hain. 🍽️
// - Har worker ek task karta hai.
// - Naya task aaye toh available worker usay handle karta hai.
// - Har task ke liye naya worker banane ki zaroorat nahi hoti.

// --------------------------------------------------------------

// What is libuv?
// Easy words mein, libuv ek library hai jo Node.js ko asynchronous tasks handle karne mein help karti hai.

// Example
// Node.js mein jab hum file read karte hain, toh libuv background mein file-reading operation 
// handle karne mein help kar sakti hai.

// Easy Notes
// Definition: libuv is a library used by Node.js to handle asynchronous I/O operations and manage the Event Loop.

// Main functions:

// - Manages the Event Loop.
// - Provides a Thread Pool for certain tasks.
// - Helps handle asynchronous operations.

// Remember:

// - Event Loop: Callbacks ko manage karta hai.
// - Thread Pool: Kuch tasks background mein execute karta hai.
// - libuv: In systems ko provide karne wali library hai.

// --------------------------------------------------------------


// Macrotask and Microtask

// 1. Macrotask
// Macrotasks are tasks scheduled to execute later, such as `setTimeout()` and `setInterval()` callbacks.

// Examples: `setTimeout()`, `setInterval()`, event callbacks.

//  2. Microtask
// Microtasks are small tasks that execute after the current synchronous code finishes and before the next macrotask.

// Examples: Promise `.then()`, `.catch()`, `.finally()`, and `queueMicrotask()`.

//  Difference
// Macrotask: Executes after microtasks are processed.
// Microtask: Executes before the next macrotask.

// Important: JavaScript completes synchronous code first, then processes microtasks before moving to the next macrotask.


// console.log("Start");

// setTimeout(() => console.log("Macro Task"), 0);

// Promise.resolve().then(() => console.log("Micro Task"));

// console.log("End");

// --------------------------------------------------------------


// NodeJS -> asynchronous -> v8 engine -> chrome