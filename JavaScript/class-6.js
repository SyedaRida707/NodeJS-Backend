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

// ---------------------------------------------------
// Error Handling
// try...catch is used to handle runtime errors so your app doesn’t crash.
// “Try to run this code. If something goes wrong, catch the error and handle it.”

// ❌ WITHOUT try...catch
// console.log("Start");
// let x = y + 1; // ❌ y is not defined
// console.log("End");
// 👉 Program crashes, "End" never runs.

// ✅ WITH try...catch
//try or catch keywords
// console.log("Start");

// try {
//   let x = y + 1;
// } catch (error) {
//   console.log("Something went wrong");
// }

// console.log("End");
//✔ App continues ✔ Error handled gracefully

// try {
//     console.log(1);
//     let x = y + 1;
//     console.log(2);
// } catch (error) {
//     let x = y + 1;
//     console.log('something wrong'); //its not error its message application crash nhi hogi
// }


// WHAT KIND OF ERRORS DOES IT CATCH?
// try...catch catches runtime errors only ❗

// Type	     Caught?
// Syntax    Error	❌ (before running)
// Runtime   Error	✅
// Logic     Error	❌

// ❌ Syntax error (won’t work)
// try {
//   let x = ;
// } catch (e) {}


// ❌ Logic error (wrong answer, no crash)
// let sum = 2 + "2"; // "22"
//No error → nothing to catch.

//BASIC SYNTAX (MEMORIZE THIS)
// try {
//   // risky code
// } catch (error) {
//   // handle error
// }

//WHAT IS error?
// try {
//     let x = y + 1;
// } catch (error) {
//     console.log(error);
//     console.log(error.message);
// }

//error is an object:
//{
//   name: "ReferenceError",
//   message: "y is not defined",
//   stack: "..."
// }

// ---------------------------------------------------

// EXAMPLE 1: Beginner Level
// try {
//   let num = JSON.parse("abc"); // invalid JSON
// } catch (err) {
//   console.log("Invalid JSON");
// }
// ✔ Prevents app crash ✔ User-friendly message

// JSON.parse("abc");     // ❌ Invalid JSON
// JSON.parse('"abc"');   // ✅ Valid JSON
// JSON.parse("123");     // ✅
// JSON.parse("true");    // ✅
// JSON.parse("null");    // ✅
// JSON.parse('{"name":"Rida"}'); // ✅
// JSON.parse("[1,2,3]"); // ✅

// ---------------------------------------------------
// EXAMPLE 2: User Input Validation (REAL APP)
// function divide(a, b) {
//     try {
//         if (b === 0) {
//             throw new Error("Cannot divide by zero");
//         }
//         return a / b;
//     }
//     catch (err) {
//         // return err
//         // return err.message;
//     }
// }
// const result = divide(10, 0);
// console.log(result);


// Exception Handling — throw and Custom Errors

// 1. What is throw?
// throw is used to manually create/raise an error in JavaScript.send to catch
// throw new Error("Something went wrong");

// It means: "I want to generate an error here."

// throw ka matlab: Khud se error generate/raise karo aur normal execution
// stop karke catch mein chale jao.

// Flow:

// throw
//   ↓
// Error create
//   ↓
// try stop
//   ↓
// catch

// 2. What is new Error()?
// new Error("Custom error message")

// creates an Error object.
// const error = new Error("Something went wrong");
// console.log(error.name);
// console.log(error.message);

// Output:
// Error
// Something went wrong

// The Error object commonly contains:
// error.name
// error.message


// 3. Custom Error
// We can create our own error message:
// throw new Error("Cannot divide by zero");

// Here:
// new Error() → creates an Error object
// "Cannot divide by zero" → custom error message
// throw → raises/sends the error
// catch(err) receives the Error object

// throw can be used for validation

// try → contains code that may cause an error.
// catch → handles the error.
// throw → manually raises an error.
// new Error() → creates an Error object.
// err → receives the Error object.
// err.message → gets the error message.
// If an error occurs before throw, the throw line will not execute.

// throw = create/raise your own error
// catch = receive/handle that error
// err.message = get the message from the Error object



//EXAMPLE 3: DOM Example
// try {
//   document.getElementById("btn").addEventListener("click", () => {
//     console.log("Clicked");
//   });
// } catch (err) {
//   console.log("Button not found");
// }
// Without try/catch → app crashes With try/catch → app survives


// FINALLY (VERY IMPORTANT)
// finally always runs (error ho ya na ho)

// try {
//   console.log("Try");
// } catch (e) {
//   console.log("Catch");
// } finally {
//   console.log("Always runs");
// }

// EXAMPLE 4: Cleanup Example
// try {
//   console.log("Opening file");
//   throw new Error();
// } catch {
//   console.log("Error occurred");
// } finally {
//   console.log("Closing file");
// }

// ONE-LINE SUMMARY (EXAM / INTERVIEW)
// try...catch prevents application crashes by handling runtime errors gracefully.
// -------------------------------------------------------
// 1. Compile-Time Error
// Code run hone se pehle code ko check/parse karte waqt error aaye.

// Example:
// let x = ;

// Yahan syntax galat hai, isliye JavaScript code ko properly parse nahi kar sakti.
// ➡️ Syntax error = compile/parse time type of error


// 2. Runtime Error
// Code run hone ke baad, execution ke waqt error aaye.

// Example:
// console.log(y);

// Agar y defined nahi hai:
// ReferenceError: y is not defined

// Syntax sahi hai, lekin code execute karte waqt problem aayi.

// -------------------------------------------------------
// reduce() is an array method used to reduce all array elements into a single final value.

// let a = [1,2,3,4];
// let result = a.reduce((accumulator,CurrElem)=>{
//    return accumulator +=CurrElem
// },0);
// console.log(result);

//flow
// [1, 2, 3, 4]

// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10

// Final result → 10

// Reduce Real usecase
// 1. Shopping Cart ka Total Price 🛒
// Real website par cart mein multiple products hote hain:

// const cart = [
//     { name: "Shirt", price: 2000 },
//     { name: "Shoes", price: 5000 },
//     { name: "Bag", price: 3000 }
// ];
// const total = cart.reduce((sum, product) => {
//     return sum += product.price;
// }, 0);
// console.log(total);

// 2. Total Marks Calculate Karna 🎓
// const marks = [80, 75, 90, 85];
// const total = marks.reduce((sum,nums)=> {
//     return sum += nums;
// },0);
// console.log(total);


// 3. Data ko Count Karna
// const fruits = ["apple", "banana", "apple", "orange", "apple"];
// const count = fruits.reduce((sum, fruit) => {
//     if (fruit === 'apple') {
//         sum++
//     }
//     return sum;
// },0);
// console.log(count);

// 4. Data → Grouping
// Suppose products different categories ke hain:

// const products = [
//     { name: "Shirt", category: "clothes" },
//     { name: "Shoes", category: "shoes" },
//     { name: "Jeans", category: "clothes" },
//     { name: "Sandal", category: "shoes" },
//     { name: 'staller', category: 'clothes' }
// ];
// const grouped = products.reduce((result, product) => {

//     if (!result[product.category]) {
//         result[product.category] = [];
//     }

//     result[product.category].push(product);

//     return result;
// }, {});
// console.log(grouped);

// Real-world rule
// reduce() tab use karo jab:
// Array ke multiple items ko process karke ek final result banana ho.

// -------------------------------------------------------


// Reducer Pattern in JS
//Reducer Pattern is a pattern where a reducer function takes the
//current state and an action, then returns a new updated state..

// state = current data
// action = kya karna hai
// reducer = change kaise karna hai decide karta hai


// function Reducer(state, action) {
//     if (action.type === 'INCREMENT') {
//         return state + 1;
//         // return ++state;
//         // return state++;
//     }
//     if (action.type === 'DECREMENT') {
//         return state - 1;
//         // return --state;
//         // return state--;
//     }
//     return state;
// }
// let state = 0;

// state = Reducer(state, { type: "INCREMENT" });
// console.log(state); // 1

// state = Reducer(state, { type: "INCREMENT" });
// console.log(state); // 2

// state = Reducer(state, { type: "INCREMENT" });
// console.log(state); // 3

// state = Reducer(state, { type: "DECREMENT" });
// console.log(state); // 1

// Flow:

// Current State + Action
//         ↓
//      Reducer
//         ↓
//     New State

// -------------------------------------------------------
// Is the browser asynchronous and JavaScript synchronous?
// JavaScript executes code synchronously by default, 
// but it can perform asynchronous operations with the help of Web APIs provided by the browser.

// JavaScript is single-threaded and executes synchronous code by default. 
// It also supports asynchronous operations with the help of browser Web APIs and the Event Loop.

// JavaScript → Synchronous by default + Asynchronous capabilities.
// Browser → Provides Web APIs for asynchronous operations.

// console.log('A');
// setTimeout(() => {
//     console.log('B');
// },3000);
// console.log('C');

// JavaScript
//    ↓
// setTimeout() browser ki Web API ko diya
//    ↓
// Browser timer handle karta hai
//    ↓
// 2 seconds baad callback ready
//    ↓
// Callback Queue
//    ↓
// Event Loop
//    ↓
// JavaScript Call Stack
//    ↓
// "B"