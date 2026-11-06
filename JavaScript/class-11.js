// Acces Modifier -> public -> private -> protected.

// Access Modifiers in OOPs
// 1. Public = Everyone
// 2. Private = Only my class
// 3. Protected = My class + child classes.


// 1. PUBLIC  >>   Har jagah se access kar sakte hain.


// class Student {
//     name = "Atruba";
// }


// let s1 = new Student();
// console.log(s1); // Object
// console.log(s1.name); // Atruba

// ------------------------------------------------------------------------------


// 2. Private   >>   Sirf class ke andar access kar sakte hain.

// class Student {
//     #marks = 90;

//     showMarks() {
//         console.log(this.#marks);
//     }
// }

// let s1 = new Student();
// console.log(s1);
// s1.showMarks(); // 90
// // console.log(s1.#marks); // Error

// ------------------------------------------------------------------------------


// 3. PROTECTED   >>  Generally class ke andar aur child class mein access karne ke liye hota hai.
// JavaScript mein protected keyword built-in nahi hai. Ye TypeScript mein available hai.

// Protected = Accessible inside the class and its child classes.
// It cannot be accessed directly from outside the class.

// JavaScript does not have a built-in protected keyword.
// Protected is available in TypeScript.

// Protected allows the parent class and child classes
// to access the property or method.

// Example: TYPESCRIPT code
// class Person {
//     protected name = "Atruba";
// }
// class Student extends Person {
//     showName() {
//         console.log(this.name); // Atruba
//     }
// }
// let obj = new Student();
// obj.showName(); // Atruba
// console.log(obj.name); // Error



// ------------------------------------------------------------------------------

// PRIVATE VARIABLE & CLASS ATTRIBUTE

// #balance → Private instance attribute (sirf class ke andar accessible).
// static → Class attribute (class se belong karta hai, object se nahi).

// class Student {
//     #marks = 90;              // Private instance attribute
//     static school = "ABC";    // Class attribute
// }

// // - #marks → Private hai, aur har object ke liye apni alag value ho sakti hai.
// // - static school → Class attribute hai, jo class se belong karta hai, object se nahi.


// let s1 = new Student();
// console.log(s1);
// console.log(s1.school);  // undefined
// console.log(Student.school); // ABC

// useCase: class attribute ka use tab hota hai jab koi value sabhi objects ke liye 
// common ho aur humein usay har object mein alag se store nahi karna hota.

// class can access private variable but object can't.

// ------------------------------------------------------------------------------

// getter -> find , setter -> values set.

// - Getter (get): Private value ko read karne ka tareeqa.
// - Setter (set): Private value ko update karne ka tareeqa.

// class Bank {
//     #balance = 1000;

//     // Normal method
//     getBalance() {
//         return this.#balance;
//     }

//     // Normal method with argument
//     setBalance(newbalance) {
//         this.#balance = newbalance;
//     }

//     get balance() {
//         return this.#balance;
//     }

//     set balance(value) {
//         this.#balance = value;
//     }
// }

// let account = new Bank();
// console.log(account.getBalance());
// account.setBalance(2000);
// console.log(account.getBalance());

// console.log(account.balance); // 1000 // Getter

// account.balance = 1500;       // Setter  property ki tarhn likhty to setter call hojata hai
// console.log(account.balance); // 1500

// ---------------------------------------------------------------------

// What is Event Loop?
// Event Loop is a mechanism in JavaScript that helps execute asynchronous 
// callbacks when the Call Stack is empty.

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
// Thread Pool is a group of worker threads in Node.js. It performs some tasks in the background.
// It is managed by libuv. By default, it has 4 worker threads.

// Example:
// When Node.js reads a file, Thread Pool can handle
// this task in the background.

// Main Thread = Runs JavaScript code.
// Thread Pool = Performs some background tasks.
// Event Loop = Handles callbacks when tasks are completed.

// Main Thread = Manager
// Thread Pool = Workers
// Event Loop = Manager ko batata hai ke worker ka task complete ho gaya.

// Manager orders receive karta hai aur workers ko tasks de deta hai.
// Workers background mein apna kaam karte hain. Manager meanwhile doosre orders handle karta rehta hai.

// Example:
// Socho 4 workers hain aur 5 files read karni hain.
// Pehli 4 files par workers kaam karenge. Jab koi worker free hoga, woh 5th file par kaam karega.
// Remember: Default Thread Pool Size = 4 worker threads.

// --------------------------------------------------------------

// What is libuv?
// libuv is a library in Node.js that helps handle asynchronous operations using the Event Loop and Thread Pool.
// libuv helps Node.js perform background tasks without blocking the main thread.

// Example
// When Node.js reads a file, libuv helps handle
// the file-reading operation in the background.


// ----Main functions:---
// - Manages the Event Loop.
// - Provides a Thread Pool for certain tasks.
// - Helps handle asynchronous operations.

// Remember:
// - Event Loop: Callbacks ko manage karta hai.
// - Thread Pool: Kuch tasks background mein execute karta hai.
// - libuv: In systems ko provide karne wali library hai.

// Event Loop = Manages callbacks.
// Thread Pool = Performs background tasks.
// libuv = Provides Event Loop and Thread Pool.

// --------------------------------------------------------------


// Macrotask and Microtask

// 1. Macrotask
// Macrotasks are tasks scheduled to execute later, 
// such as `setTimeout()` and `setInterval()` callbacks.

// Examples: `setTimeout()`, `setInterval()`, event callbacks.

//  2. Microtask
// Microtasks are small tasks that execute after the current synchronous code 
// finishes and before the next macrotask.

// Examples: Promise `.then()`, `.catch()`, `.finally()`, and `queueMicrotask()`.

//  Difference
// Macrotask: Executes after microtasks are processed.
// Microtask: Executes before the next macrotask.

// Important: JavaScript completes synchronous code first, 
// then processes microtasks before moving to the next macrotask.


// console.log("Start");
// setTimeout(() => console.log("Macro Task"), 0);
// Promise.resolve().then(() => console.log("Micro Task"));
// console.log("End");

// --------------------------------------------------------------


// NodeJS -> asynchronous -> v8 engine -> chrome