// Concurrency
// Concurrency means handling multiple tasks by switching between them, 
// making progress on more than one task at a time.

// Easy Example: 
// You are cooking food and washing dishes. You switch between both tasks.

// Parallelism
// Parallelism means executing multiple tasks at the exact same time using multiple CPU cores or threads.

// Easy Example:
// Two people are working at the same time. One is cooking food and the other is washing dishes.

// Difference
// - Concurrency: Multiple tasks make progress over overlapping periods.
// - Parallelism: Multiple tasks execute simultaneously.

// Remember:Concurrency is about managing multiple tasks; 
// parallelism is about doing multiple tasks at the same time.

// --------------------------------------------------------------

// Process vs Thread 

// Process
// A process is a program that is currently running in a computer.
// Easy Example: When you open Google Chrome, it runs as a process.

// Thread
// A thread is the smallest unit of execution inside a process.
// Easy Example: Chrome can use multiple threads to handle different tasks, 
// such as loading pages and handling user actions.

// Difference

// - Process: Aik running program.
// - Thread: Us program ke andar kaam karne wala unit.
// - One process can have multiple threads.

// Easy example: Process aik restaurant hai, 
// aur threads us restaurant ke workers hain. Har worker apna task karta hai.
// Remember: Process = Program, Thread = Worker.

// --------------------------------------------------------------

// Main Thread vs Child Thread 
// 1. Main Thread: The main thread is the primary thread that starts executing a program.
// 2. Child Thread: An additional thread created by a program to perform tasks separately from the main thread.

// Example
// Maan lo ek restaurant hai:
// - Main Thread: Main chef jo kaam start karta hai.
// - Child Thread: Doosre chefs jo additional tasks karte hain.

// Difference
// Main Thread	                                Child Thread
// Program ka main execution start karta hai.	Extra tasks perform karne ke liye create hota hai.
// Program ka primary thread hai.	            Additional thread hai.

// Remember: Main thread = Main worker; Child thread = Extra worker.

// --------------------------------------------------------------

// What is Callback Hell?
// Callback Hell happens when multiple callbacks are nested inside each other, 
// making code difficult to read and understand.

// setTimeout(() => {
//     console.log('i am callback 1');
//     setTimeout(() => {
//         console.log('i am callback 2');
//         setTimeout(() => {
//             console.log('i am callback 2');

//         }, 1000);
//     }, 1000);
// }, 1000);

// --------------------------------------------------------------
// How to perform asynchronous before promises?
// Before Promises: JavaScript used callbacks to handle asynchronous operations.

// function getData() {
//     setTimeout(() => {
//         console.log("Data received A");
//         setTimeout(() => {
//             console.log("Data received B");
//             setTimeout(() => {
//                 console.log("Data received C");

//             }, 1000);
//         }, 1000);
//     }, 1000);
// }

// getData();

// After promise
// function getData(message) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Data received " + message);
//             resolve("done " + message);
//         }, 1000);
//     });
// }

// getData("A")
//     .then((res) => {
//         console.log(res);
//         return getData("B");
//     })
//     .then((res) => {
//         console.log(res);
//         return getData("C");
//     })
//     .then((res) => {
//         console.log(res);
//     });

// --------------------------------------------------------------
// What is fetch() in JavaScript?
// fetch() is a JavaScript function used to request data from a server or API.

// Example
// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// --------------------------------------------------------------
