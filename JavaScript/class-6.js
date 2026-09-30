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
//         return err.message;
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






















//new Error(...) se hum Error object banate hain,
//aur catch (err) us object ko receive karta hai. 👍
//➡️ ek Error object create karta hai.
//new Error("Cannot divide by zero")

//Phir throw us Error object ko catch tak bhej deta hai:
//➡️ custom Error create/raise karta hai
// throw new Error("Something went wrong");

//Yahan err us Error object ko receive karta hai.
//➡️ Us error ko receive/handle karta hai
// catch (err) {
//     console.log(err.message);
// }


// throw → error bhejo/raise karo
// catch → error receive & handle karo

// new Error() → Error object create
// throw → Error object send/raise
// catch(err) → Error object receive
// err.message → Error ka message get

// try {
//     let y;
//     if (y === undefined) {
//         throw new Error('y is actually not define');
//     }
//     let x = y + 1;
// } catch (err) {
//     console.log(err.message);
// }