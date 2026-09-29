// how to get and received data from function?
// Arguments pass data into a function, parameters receive that data,
// and return sends data back from the function.

// function sum(a, b) { // a,b receive data
//     // Function ke andar se data bahar bhejta hai.
//     return a + b;    // send result back
// }
// // Bahar us returned data ko receive karta hai.
// let result = sum(3, 5); // 3,5 pass data
// result receives returned data
// console.log(result);

// return data ko function ke bahar bhejta hai,
// jise hum variable mein receive kar sakte hain.

// ---------------------------------------------------
// which one is faster object and array?
// Array vs Object — Performance
// There is no fixed rule that Array is always faster than Object.
// There is also no fixed rule that Object is always faster than Array.
// Performance depends on the operation and how the data is being used.

// Array Used for ordered/list data.
// Aapke paas students ki list hai:
// const users = ["Rida", "Ali", "Sara"];
// console.log(users[0]); // Rida

// Object Used for key-value data.
// Lekin ek student ki details hain:
// const user = {
//     name: "Rida",
//     age: 20
// };
// console.log(user.name); // Rida

// Choose Array or Object based on the type of data and operation, 
// not simply because one is faster.

// List of things        → Array
// Details of one thing  → Object