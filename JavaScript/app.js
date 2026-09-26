// --------------- Class 1 -----------------

// JavaScript data types :In JavaScript, data can be divided into two main groups:
// Data Types => 1 Primitive 2 Non-Primitive (Reference types)

// 1 Primitive = a simple/basic value.
// String
// Number
// BigInt
// Boolean
// Undefined
// Null
// Symbol

// Primitive values are immutable
// mmutable = cannot be changed

// 2 Non-primitive / reference types mutable
// Object
// Array
// Function

// their contents can generally be changed.

// "Stored by value" vs "stored by reference"

// Stored by value
// let a = 10;
// let b = a;
// b = 20;

// output a → 10 b → 20 Changing b doesn't change a.

// stored by reference
// let person1 = {
//     name: "Rida"
// };

// let person2 = person1;
// person2.name = 'syeda'
// console.log(person1,person2);
// Conceptually, both variables refer to the same object:
// Because person1 and person2 refer to the same object.

// let fruits = ['apple','mango','banana'];
// let f2 = fruits;
// f2[0] = 'orange';
// console.log(fruits);
// console.log(f2);


// Primitive assignment copies the value.
// Object assignment copies the reference to the same object.

// Undefined
// let name;
// console.log(name); //undefined
// Because we created the variable but didn't give it a value.

// Null
// let name = null;
// Usually means: "I intentionally want this to have no value."

// undefined → value hasn't been provided
// null → intentionally empty

// let a = 20;
// a = 21;  // let allow to reassign the value

// const a = 20;
// a = 21; // give error const not allow

// Compile Time
// Compile time is the time when our code is converted into machine language before
// the program runs.- and execute it.

// Run Time
// Run time is the time when the program is actually running and executing the code.
// If x is not defined, JavaScript gives an error while the program is running.
// This is called a run-time error.
// console.log(x);

// Good boolean varable name
// let isStudent = true;
// let isLoggedIn = false;
// let hasPermission = true;
// let canDrive = false;
// Because the variable name becomes easy to understand:

// Prefix ++x
// modifies the variable before using its value
// let x = 5;
// console.log(++x);
// console.log(x);
// Increment happens before the value is used.

// Postfix x++
// uses current value first,then modifies it afterwards
// let x = 5;
// console.log(x++); // 5
// console.log(x); // 6
// Increment happens before the value is used.

// all operators

// --------------- Class 2 -----------------
// var a;  //Declare
// var a = 10;  //Declare + Initialize
// var a = 20;  // ✅ redeclare
// a = 30;      // ✅ reassign (sometimes informally called reinitialization)

// let b = 10;
// let b = 20; // ❌ redeclare
// b = 20;       // ✅ reassign

// const c = 10;
// // const c = 20; // ❌ redeclare
// // c = 20;       // ❌ reassign

// Block Scope: let aur const block ke andar hi kaam karte hain.
// {
//    let x = 5;
//    const y = 20;
// }
// console.log(x); // ❌ Error

// var block scope nahi hota.
// {
//    var x = 5;
// }
// console.log(x); // ✅ 5


// Global aur Local Variable
// let c = 2; // Global
// {
//    let c = 1; // Local
//    console.log(c); // 1
// }

// console.log(c); // 2


// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their
// scope before code execution. This means that no matter where functions and variables are declared, they are
// moved to the top of their scope regardless of whether their scope is global or local.

// todo When a function declaration is hoisted, its entire definition (including the body) is moved to the top
// of its containing scope during the creation phase. This means that you can call the function before it's
// actually declared in the code, and it will still work as expected.

// Hoisting means JavaScript makes declarations available before the code is executed.


// before execution
// var myVar;
// console.log(myVar);
// function greet() {
//     console.log("Welcome, If you are reading this, Don't forget you are awesome");
// };

// this is hoisting
// console.log(myVar);
// greet();
// var myVar = 10;
// function greet() {
//     console.log("Welcome, If you are reading this, Don't forget you are awesome");
// };


// let and const are hoisted, but they cannot be accessed before initialization because they are in the
// Temporal Dead Zone (TDZ).

// let myVar = 10;
// const greet = () => {
//   console.log("Welcome, If you are reading this, Don't forget you are awesome");
// };

// console.log(myVar);
// greet();


// / TDZ START
// Temporal Dead Zone is the time between entering a scope and initializing
// a let or const variable. During this time, we cannot access the variable.

// console.log(name); // ❌ Cannot access 'name' before initialization

// // TDZ ke andar
// // name ko access nahi kar sakte

// let name = "Rida"; // ✅ TDZ END
//                    // name ab initialize ho gaya

// console.log(name); // ✅ Rida


// practice
// let car = {
//     brand : 'toyota',
//     model : 'swift',
//     year : '2025',
//     location : {
//         design : 'soft'
//     }
// }
// car.brand = 'suzuki' //update
// car.location = 'karachi' // insert
// console.log(car.location.design);
// console.log(car['location']['design']);
// 1 node is root , 2 node is leaf

// Upsert in JavaScript
// Upsert means Update + Insert.
// When we assign a value to an object property:
// If the key already exists, its value is updated.
// If the key does not exist, a new property is inserted.

// let arr = [1,2,3];
// arr[0] = 0; //update
// arr[3] = 4; // insert
// console.log(arr);

// nested array
// let arr =[[[0,1],[3,4]]];
// console.log(arr[0][1][1]);


// --------------- Class 3 -----------------

// Object, Array, String => iterable
// Loops/Iteration: A loop repeatedly executes a block of code; for loops are used
// when the number of iterations is known, while
// while loops are used when it is unknown.

// x is iterator or x update so its dynamic variable
// let x = 0 → starting value
// x < 5 → condition/expression
// x++ → update

// for(let x = 0; x < 5; x++){
//     console.log(x);
// }
// loop cab be apply on array, object string

// descending order
// for(let x = 5; x > 0; x--){
//     console.log(x);
// }

// let arr = ['mango', 'apple', 'banana'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = [['somewhere', 'someone '], ['somebody', 'something']];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     for (let a = 0; a < arr[i].length; a++) {
//         console.log(arr[i][a]);
//     }
// }

// let data = ['Atruba', 'Rida'];
// for (name of data) {
//     console.log(name);
//     for (let i of name) {
//         console.log(i);
//     }
// }

// let arr = [['somewhere', 'someone ', 'somebody', 'something']];
// let arr = [['somewhere', 'someone '], ['somebody', 'something']];

// for (index in arr) {
//     console.log(index);
//     for (i in arr[index]) {
//         console.log(i);
//     }
// }


// Use a while loop when you don’t know how many times the loop will run,
// but you know the condition.
// while check condition multiple time and if check condition one time

// let password = '';
// while (password !== '1234') {
//     password = prompt('enter the password');
//     // break;
// }
// console.log('you login', password);

// inifinite loop jab tak PC RAM explode na hojaye
// Loop continuously chalta rahega aur kabhi stop nahi hoga.
// Agar manually stop na karein, to system ke resources (RAM/CPU)
// bohat zyada use ho sakte hain aur computer slow ya hang ho sakta hai.

// while (4<5) {
// console.log('inifinite');
// }

// let arr = ['Murree', 'Skardu', 'Hunza', 'Abbottabad'];
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++
// }


// --------------- Class 4 -----------------

// Break => stop loop
// continue => stop specific condition
// for(let i = 1; i <=5; i++){
//     if(i ===3){
//         // continue
//         // break;
//     }
//     console.log(i);
// }

// do while loop run atleast one time if condition true or not.
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 2)

// Real world example
// let pin = '';
// do {
//     pin = prompt("Enter your PIN:");
// } while (pin !== "1234");
// console.log("PIN correct! Welcome.");


// Spread Operator
// let arr = [1,2,3];
// // 1: Copying an array
// let newArr = [...arr];
// newArr[0] = 17;
// console.log('Original',arr);
// console.log('Copy',newArr);

// 2: Concatenating arrays / Combining arrays
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let combine = [...a, ...b];
// console.log(combine);


// 3: Adding Elements to existing array
// let a = ['mutib'];
// //both are same
// // a.push('muhib');
// console.log(a);
// // array ke elements ko unpack karke push() mein add kar do. like = 'muhib'
// a.push(...['muhib']);
// console.log(a);


//! One more useCases
//? In JavaScript, when you spread a string using the spread syntax (...),
// it converts the string into an array of its individual characters.

//? Traditional way
// const country = "PAKISTAN";
// console.log(country.split(""));

//? New way of doing it
// const country = "PAKISTAN";
// console.log([...country]);


//* ==========================================
//*  Rest parameters  - Modern JavaScript
//* =========================================
//? The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
//  providing a more flexible way to work with functions that can accept varying numbers of arguments.

//? traditional way of doing it
// const sum = (a, b, c, d) => {
//   return a + b + c + d;
// };

//? with rest parameters
// const sum = (...numbers) => {
//     console.log(typeof numbers);
//     return numbers.reduce((accum, value) => (accum = accum + value), 0);
// };

// console.log(sum(1, 2, 3, 4));


// const sum = (a, b, ...numbers) => {
//     console.log(typeof numbers);
//     return numbers.reduce((accum, value) => (accum = accum + value), 0);
// };

// console.log(sum(1, 2, 3, 4));

//TODO NOTE: A function definition can only have one rest parameter, and the rest parameter must
// be the last parameter in the function definition.
// function wrong1(...one, ...wrong) {}
// function wrong2(...wrong, arg2, arg3) {}

// function right(a,b ...arg){}


//* ============================
//*  Rest/Spread Properties
//* =============================

//? ES6 introduced the concept of a rest element when working with array destructuring:
// Rest (...) collects the remaining values, while Spread (...) unpacks the values.

// const numbers = [1, 2, 3, 4, 5];

// Spread (...) → Array ki values ko unpack/bahar nikal kar alag-alag karta hai.
// console.log(...numbers);

// Rest (...) → Remaining/bachi hui values ko collect karta hai.
// [first, second, ...others] = numbers;
// console.log(others);


// and spread elements:
// const numbers = [1, 2, 3, 4, 5];
// const sum = (a, b, c, d, e) => a + b + c + d + e;
// const sumOfNumbers = sum(...numbers)
// console.log(sumOfNumbers);


//* ES2018 introduces the same but for objects.

//? Object and Rest Operator
// const student = {
//   age: 10,
//   name: "rida",
//   isStudent: true,
// };

// const { age, ...others } = student;
// console.log(others);

//? Object and Spread operator
// const obj1 = { a: 10, b: 20, c: 50 };
// const obj2 = { c: 30, d: 40 };

// const newObj = { ...obj1, ...obj2 };
// console.log(newObj);
// override
// const newObj = { ...obj2, ...obj1 };
// console.log(newObj);

// scalable function
// Scalable ka matlab: function ko different number of values ke saath use kar sakte hain.
// function sum(...nums){
//     console.log(nums);
//     return nums;
// }
// instance of a function / collar of a function
// let a = sum(1,2,3,4,5);
// console.log(a);
// in js User define function and built in function

// Example
// function sum(...nums) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (typeof nums[i] === "number") {
//             console.log(typeof nums[i]);
//             count += nums[i];
//         }
//     }
//     console.log(count);

// }
// sum(1, true, '3', []);
// sum(1, 2, 3, 4, 5);

// Heap Memory ek memory area hai jahan JavaScript objects,
// arrays aur functions ka data store karti hai.

// Example:

// const user = {
//     name: "Rida",
//     age: 21
// };

// const arr = [10, 20, 30]

//        HEAP MEMORY
// ┌─────────────────────────┐
// │                         │
// │  👤 user object         │
// │  { name: "Rida",        │
// │    age: 21 }            │
// │                         │
// │  📦 arr                 │
// │  [10, 20, 30]           │
// │                         │
// └─────────────────────────┘

// Memory Leak
// Jab program ko kisi memory ki zaroorat nahi hoti,
// lekin phir bhi woh memory release nahi hoti.

// let users = [];
// setInterval(() => {
//     users.push("New User");
// }, 1000);

// Yahan har 1 second mein users array mein new data add ho raha hai,
// lekin purana data remove nahi ho raha.

// Heap Memory
// ┌─────────────────────┐
// │ New User            │
// │ New User            │
// │ New User            │
// │ New User            │
// │ New User            │
// │ ...                 │
// └─────────────────────┘
//         ↓
// Memory usage keeps increasing
//         ↓
// 🐌 Slow performance / 💥 possible crash

//? Memory Leak:
//? Jab program unused memory ko release nahi karta,
//? aur memory continuously occupied hoti rehti hai,
//? usay Memory Leak kehte hain.


// Garbage Collection
// JavaScript mein Garbage Collector ek automatic system hai jo unused/unreachable
// data ko memory se remove karta hai.

// 🏠 Real-life example
// Room ko memory samjho:

// Room = Memory 🧠

// 📦 Box 1 → abhi use ho raha hai
// 📦 Box 2 → abhi use ho raha hai
// 🗑️ Box 3 → kisi kaam ka nahi

// Garbage Collector:
// 🗑️ Box 3 → remove
// Ab room mein space free ho gayi. ✅

// let user = {
//     name: "Rida"
// };

// user = null;
// Pehle user ─────► { name: "Rida" }
// Phir user = null

// Ab object ko koi reference nahi kar raha:

// user ─────► null
// { name: "Rida" }  ← unreachable

// Garbage Collector eventually is unused object ki memory reclaim kar sakta hai. ♻️

//? Garbage Collection:
//? JavaScript ka automatic process jo unused/unreachable
//? data ki memory ko free/reclaim karta hai.


// /? Debugger:
// Debugger ka use code ko step-by-step check karne ke liye hota hai,
// taake hum dekh saken ke code mein kya ho raha hai aur error kahan aa raha hai.

//? Code ko pause karke step-by-step check karne ke liye use hota hai.
//? Isse hum variables ki values aur code execution ko check kar sakte hain.


//? Synchronous:
//? Code execution line-by-line hoti hai.
//? Next task tab start hota hai jab previous task complete ho jaye.

// Synchronous = Wait karo, pehla kaam complete hone do, phir next kaam karo.

// how to check if any data structure is an array?
// let arr = [1,2,3];
// console.log(Array.isArray(arr));

//? Array.isArray()
//? Checks whether a value is an array or not.
//? Returns true if it is an array, otherwise false.

//? Resource Exhausted:
//? Jab program computer ke resources (RAM/CPU) ko itna zyada use kare
//? ke available resources bohat kam ya khatam ho jayein,
//? usay Resource Exhausted kehte hain.

// Example:
// Infinite loop continuously CPU ko use kar sakta hai,
// aur resources exhaust ho sakte hain.
//while (true) {
// console.log("Hello");
// }

// Shallow Copy
// Shallow copy ka matlab hai object ki new copy banana,
// lekin agar andar koi nested object/array ho to uski copy nahi banti.
// let obj = {
//     name : 'rida',
//     age: 21,
//     dreams :{
//         see : 'nature'
//     }
// }
// let newObj = {...obj}
// console.log(newObj);
// newObject ka address change hogya memory me isliye false
// console.log(newObj === obj);
// Lekin nested address same hai:
// console.log(newObj.dreams === obj.dreams);

// Shallow Copy
// → Outer object ki new copy banti hai,
//   lekin nested objects/arrays same reference rakhte hain.
// newObj.dreams.see = 'turkey';
// console.log(obj.dreams.see);

// Deep Copy
// Deep copy mein outer object + nested objects/arrays sabki new copies banti hain.
//? structuredClone()
//? Used to create a deep copy of an object , array.
//? It also copies nested objects and arrays,
//? so changes in the copy do not affect the original.
// const person = {
//     name: "Rida",
//     address: {
//         city: "Karachi"
//     }
// };

// const copy = structuredClone(person);

// copy.address.city = "Lahore";

// console.log(person.address.city); // Karachi
// console.log(copy.address.city);   // Lahore

// const arr = [1,2,
//     {
//         name: "Rida"
//     }
// ];

// const copy = structuredClone(arr);

// copy[2].name = "Ali";

// console.log(arr[2].name);   // Rida
// console.log(copy[2].name);  // Ali




























