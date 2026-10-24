//programing => Procedural , function, OOP

// 1 Procedural Programming
// Procedural Programming is a programming approach in which a program is written as a 
// sequence of step-by-step instructions. We can divide the code into smaller procedures 
// or functions to organize it.

// Example:

// // Step 1: Store values
// let a = 10;
// let b = 20;

// // Step 2: Calculate sum
// let sum = a + b;

// // Step 3: Display result
// console.log(sum); // 30

// We can also use functions:
// function calculateSum(a, b) {
//     let sum = a + b;
//     console.log(sum);
// }
// calculateSum(10, 20);


// 2. Functional Programming
// Functional Programming is a programming approach in which functions are the main building 
// blocks of a program. It focuses on using functions to process and transform data.

// Example:

// const numbers = [1, 2, 3, 4, 5];
// function double(num) {
//     return num * 2;
// }
// const result = numbers.map(double);
// console.log(result);

// 3. Object-Oriented Programming (OOP)
// Object-Oriented Programming is a programming approach in which code is organized around 
// objects and classes.

// Objects contain:
// Properties: Data or information.
// Methods: Functions that define behavior.

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log("Hello " + this.name);
//     }
// }

// const student1 = new Student("Rida", 21);

// console.log(student1.name); // Rida
// console.log(student1.age);  // 21

// student1.greet(); // Hello Rida

//-----------------------------------------------------------
// Spread Operator :The spread operator takes an iterable or object and expands its contents.
// const fruits = ["apple", "banana", "mango"];
// const newFruits = [...fruits, "orange"];
// console.log(newFruits);

// Output:["apple", "banana", "mango", "orange"]
// Think of: ...fruits
// as: "apple", "banana", "mango"

// So this: const newFruits = [...fruits, "orange"];
// is conceptually: const newFruits = ["apple", "banana", "mango", "orange"];

//Spread for Copying Arrays : One very common use is creating a copy of an array.
// const users = ["Ali", "Ahmed", "Sara"];
// const copiedUsers = [...users];
// console.log(copiedUsers);
// console.log(users !== copiedUsers);

//that's not what you want it target the same array not copy because refference
// const users = ["Ali", "Ahmed"];
// const copiedUsers = users;
// copiedUsers.push("Sara");
// console.log(users);

//this is what you actually want copy
// const users = ["Ali", "Ahmed"];
// const copiedUsers = [...users];
// copiedUsers.push("Sara");
// console.log(users);
// console.log(copiedUsers);

//Combining Arrays
// const frontend = ["HTML", "CSS", "JavaScript"];
// const backend = ["Node.js", "Express"];
// const skills = [...frontend, ...backend];
// console.log(skills);

//Without spread, you'd get nested arrays:
// const skills = [frontend,backend];
// console.log(skills);

//Real-World Scenario: Shopping Cart
//Imagine an e-commerce application.

// Existing cart:
// const cart = [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Mouse" }
// ];

// User adds a keyboard:
// const keyboard = {
//   id: 3,
//   name: "Keyboard"
// };

// const updatedCart = [...cart, keyboard];
// console.log(updatedCart);
//you now have a new cart without modifying the original cart.
//"Create a new array containing everything currently in cart, plus the keyboard."

//Spread with Objects
// const user = {
//   name: "Ali",
//   age: 20
// };

// const updatedUser = {
//   ...user,
//   city: "Karachi"
// };

// console.log(updatedUser);
// ...user => means: Copy all properties from user here.

//Updating an Object: This is one of the most important real-world uses.
// const user = {
//     name: "Ali",
//     age: 20,
//     city: "Karachi"
// };
//You want to change the age.
// const updatedUser = {
//     ...user,
//     age: 21
// };
//overwrites the previous age. 20 and win last value 21
// console.log(updatedUser);

// Object Merging
// const personalInfo = {
//   name: "Ali",
//   age: 20
// };

// const address = {
//   city: "Karachi",
//   country: "Pakistan"
// };

// const user = {
//   ...personalInfo,
//   ...address
// };
// console.log(user);

// Important: Later Properties Win
// const user1 = {
//   name: "Ali",
//   age: 20
// };

// const user2 = {
//   name: "Ahmed",
//   city: "Lahore"
// };

// const user = {
//   ...user1,
//   ...user2
// };
// console.log(user);

//Rest does the opposite : Instead of expanding, it collects.
// function addNumbers(...numbers) {
//   console.log(numbers);
// }
// addNumbers(10, 20, 30, 40);
// ...numbers : is Rest It collects all remaining arguments into an array.

//Why Do We Need Rest?
// Imagine a function where you don't know how many arguments the user will provide.

// function addNumbers(...numbers) {
//   return numbers.reduce((sum, number) => sum + number, 0);
// }
// console.log(addNumbers(10, 20));
// console.log(addNumbers(10, 20, 30));
// console.log(addNumbers(10, 20, 30, 40, 50));

//Rest with Normal Parameters: You can have regular parameters before the rest parameter.
// function introduce(name, ...skills) {
//     console.log(name);
//     console.log(skills);
// }
// introduce("Ali", "JavaScript", "React", "Node.js");

// Real-World Scenario: User Permissions
// Imagine an application where you create a user with multiple permissions.

// function createUser(username, ...permissions) {
//     return {
//         username,
//         permissions
//     };
// }

// const user = createUser(
//     "ali",
//     "read",
//     "write",
//     "delete"
// );
// console.log(user);
// jab object ke andar sirf variable ka naam likhte hain, 
// JavaScript usi naam ko key aur us variable ki value ko value bana deti hai.

// Rest with Array Destructuring
// Rest isn't limited to functions.
// You can use it while destructuring arrays.

// const numbers = [10, 20, 30, 40, 50];
// const [first, ...remaining] = numbers;
// console.log(first);
// console.log(remaining);

//Put the first item into first, and collect everything else into remaining.


// Real-World Scenario: Processing a Queue
// const queue = [
//   "Customer 1",
//   "Customer 2",
//   "Customer 3",
//   "Customer 4"
// ];
// const [currentCustomer, ...waitingCustomers] = queue;
// console.log(currentCustomer,waitingCustomers);

// Rest with Object Destructuring
// This is another very important pattern.

// const user = {
//   name: "Ali",
//   age: 20,
//   city: "Karachi",
//   country: "Pakistan"
// };

// const { name, ...otherDetails } = user;
// console.log(name);
// console.log(otherDetails);
// Rest collected all the remaining properties.

//Real-World Scenario: Removing a Property
// Suppose you receive a user object:

// const user = {
//   id: 101,
//   name: "Ali",
//   email: "ali@example.com",
//   password: "secret"
// };
// You want to create an object without the password.
// const { password, ...safeUser } = user;
// console.log(safeUser);
//The Rest operator collected everything except password.
// This pattern is useful when transforming objects.

//Rest vs Spread — The Most Important Difference
// Look carefully. (Spread)
// const numbers = [1, 2, 3];
// const copy = [...numbers];
// Here ...numbers means: Take the values out.

// Rest
// Here ...remaining means: Collect the remaining values.
// const [first, ...remaining] = numbers;
// Same syntax: ... Different behavior based on context.

// Function Calls and Spread
// Spread can also be used when calling functions.
// const numbers = [10, 20, 30 , 40];
// console.log(Math.max(...numbers));


// Rest + Spread Together
// function calculateTotal(...prices) {
//   return prices.reduce((total, price) => total + price, 0);
// }
// const cartPrices = [100, 250, 50];
// const total = calculateTotal(...cartPrices);
// console.log(total);

//One More Real-World Example : Imagine an API function:
// function createOrder(customer, ...products) {
//   return {
//     customer,
//     products
//   };
// }
// const result = createOrder('Rida','mouse','keyboard','speaker');
// console.log(result);

//Common Mistake
// const a = [1, 2, 3];
// const b = [...a];  //The first produces:[1, 2, 3]
// const c = [a];     // The second produces:[[1, 2, 3]]
// console.log(b);
// console.log(c);

// --------------------------------------------------------------
// this kya hai  =>  this ek keyword hai jo current object ko refer karta hai.
// this concept : this tells us which object/context the function is being called with.

//Rule 1: Default (Global Call)
// "use strict";
// Strict mode mein JavaScript automatically global object assign nahi karti.
// function show() {
//   console.log(this);
// }
// show();

// --------------------------------------------------------------

//Rule 2: Object Method (MOST IMPORTANT)
// const user = {
//   name: "Rida",
//   greet: function () {
//     console.log(this.name);
//   },
// };
// user.greet();

// --------------------------------------------------------------

// Real Example (Car System)
// const car = {
//   brand: "Toyota",
//   start: function () {
//     console.log(`${this.brand} is starting`);
//   },
// };
// car.start();

// --------------------------------------------------------------

// Rule 3: Lost Context (Biggest Beginner Mistake)
// const user = {
//     name: "Ali",
//     greet: function () {
//         console.log('this is name', this.name);
//     },
// };
// function normally run hora bss this ko fixed ke liye bind use hota
// const fn = user.greet;
// fn();
// fn.call(user)
// fn.apply(user)

// fixed it
// User object ke greet function ka reference lo,
// aur iski this ko user ke saath fix karke ek new function de do.

// const fn = user.greet.bind(user);
// fn();

// --------------------------------------------------------------

// You can manually control this.
// function greet(mssg, age) {
//     console.log(mssg, this.name, age);
// }
// const user = { name: "Ali" };

// CALL()   =>    function.call(object, arguments)
// call() immediately calls a function and allows us to set the value of this.

// greet.call(user, 'this is the message', 30);

// APPLY()   =>  function.apply(object,[arguments]);
// apply() is similar to call(). It immediately calls a function and allows us to set this.
// The main difference is that arguments are passed inside an array.

// greet.apply(user, ['hello', 21]);


// BIND()  =>   function.bind(object,arguments)
// bind() does not immediately execute the function.
// It creates and returns a new function with a fixed this value.

// const result = greet.bind(user, 'helloOO', 23);
// result()


// call() → arguments one by one / separately
// apply() → arguments in an array
// bind() → arguments one by one / separately, but function later call hota hai

// --------------------------------------------------------------

// what is call(), apply(), blind()?

// call() → Call now.
// apply() → Call now with an array.
// bind() → Create a function now, call it later.

// --------------------------------------------------------------

//Rule 4: Arrow Functions (Special Behavior)
// const user = {
//     name: "Ali",
//     greet: () => {
//         console.log(this.name);
//     },
// };
// user.greet();

// Normal function: "Who called me?" call ke waqt this decide
// Arrow function: "Main kahan bana hoon?" parent/outer scope ka this

// Arrow functions DO NOT have their own this
// They inherit from parent scope

// function user() {
//     console.log(this);
//     const greet = () => {
//         console.log(this);
//     }
//     greet()
// }
// user();

// --------------------------------------------------------------

// Real-World Use Case (Frontend)
// ❌ Wrong (common bug)
// button.addEventListener("click", function () {
//   console.log(this); // button ✅
// });

// button.addEventListener("click", () => {
//   console.log(this); // NOT button ❌
// });
// 👉 Why?
// Normal function → this = button
// Arrow function → this = outer scope

// --------------------------------------------------------------

// Rule 5: Constructor Function
// Constructor rule
// When a function is called with new, this refers to the newly created object.
// function User(name) {
//     this.name = name;
// }
// const u1 = new User("Ali");
// console.log(u1);

// new User("Ali")
//       ↓
// New object created {}
//       ↓
// this = new object
//       ↓
// "Ali" → name parameter
//       ↓
// this.name = name
//       ↓
// this.name = "Ali"
//       ↓
// u1 → { name: "Ali" }

// --------------------------------------------------------------

// Practice Challenge (Important)
// const obj = {
//     name: "Ali",
//     say: function () {
//         console.log(this.name);
//     },
// };
// const obj2 = {
//     name: "Ahmed",
//     say: obj.say,
// };
// Function reference same ho sakta hai, lekin this call ke waqt decide hota hai.
// obj.say()
// obj2.say();

// --------------------------------------------------------------

// const bioData = {
//     name: "personName",
//     age: 20,
//     gender: "female",

//     greet: function () {
//         console.log(
//             `Hi, I'm ${this.name}. I'm ${this.age} years old, and I identify as ${this.gender}.`
//         );
//     },
// };

// let student = {
//     name: "Atruba",
//     age: 20,
//     gender: "female"
// }

// bioData.greet.call(student);
// bioData.greet.apply(student);
// means the student variable is reassigned from the object to the new function.
// student = bioData.greet.bind(student);
// student();

// --------------------------------------------------------------

// Dynamic Key in JavaScript
// A dynamic key is a key whose name is decided by a variable's value.

// let key = "name";
// const user = {
//     [key]: "Rida"
// };

// console.log(user); // { name: "Rida" }
// Note: Square brackets [] are used to create a dynamic key.

// --------------------------------------------------------------

// Hash Table
// A hash table is a data structure that stores data in key-value pairs and allows fast searching using keys.
// name => key , Rida => value

// --------------------------------------------------------------

// A closure is created when an inner function has access to the variables of its outer function, 
// even after the outer function has finished executing.

// function outer() {
//     let name = "Rida";

//     function inner() {
//         console.log(name);
//     }

//     return inner;
// }

// const result = outer();
// result(); // Rida

// outer() mein name variable hai.
// inner() us variable ko access karta hai.
// outer() finish ho gaya, phir bhi inner() ko name yaad hai.

// in callStack outer() function come create execution content and return inner function then callStack empty function finish.
//the inner function run come in callStack create execution context and the variable of outer function get through heap memory.

// --------------------------------------------------------------

// ============================  Execution Context (Code chalana) ===================================
// Execution Context = ek environment/jagah jahan JavaScript ka code run hota hai.
// Ab actual code execute/run hona start hota hai.
// Execution Context ke 2 Phases hote hain

// Phase 1: Creation Phase 🏗️  =>   Is phase me code run nahi hota, sirf tayari hoti hai.

// JavaScript:

// Memory banati hai.
// Variables ke liye jagah reserve karti hai.
// Functions ko memory me save karti hai.
// Hoisting isi phase me hoti hai.

// Example:
// console.log(a);             // undefined
// var a = 10;


// ==========================================

// Phase 2: Execution phase    =>   Ab JavaScript code ko line-by-line execute karti hai.

// Example:

// var a = 10;
// console.log(a);     // 10

// Execution Phase mein:
// a = 10 → a mein 10 assign hota hai
// console.log(a) → 10 print hota hai

// ==========================================================

// Execution Context is an environment in which JavaScript code is evaluated and executed.

// It has two main phases:
// Phase 1: Creation Phase 🏗️

// In this phase, JavaScript prepares the execution environment. The code is not executed line by line yet.

// - Memory is prepared for variables and functions.
// - Function declarations are stored and made available.
// - `var` variables are initialized with `undefined`.
// - `let` and `const` are created but remain uninitialized until their declarations are evaluated.
// - Hoisting is related to this phase.

// Example:
// console.log(a); // undefined
// var a = 10;

// Phase 2: Execution Phase ▶️

// In this phase, JavaScript executes the code line by line.

// var a = 10;
// console.log(a); // 10

// Remember: Creation Phase = preparation; Execution Phase = code runs;

// - Global Execution Context: Created when the script starts.
// - Function Execution Context: Created when hello() is called.

// An execution context is an environment in which JavaScript code is executed. 
// It contains information about variables, the this value, and the outer scope. 
// The Global Execution Context is created when JavaScript starts executing a script.

// --------------------------------------------------------------

// ---------------Classes and Object by SHARDA------------------

// A JS Object is an entity having state and behaviour (properties & method).
// JS Object have a special property called prototype. it create by default when object and array create. 
// It has special methods that we can use, like `Object.setPrototypeOf()` or in array .push().

// we can set prototype using ( Name.__proto__ = object)

// Prototype in JavaScript

//  A prototype is an object from which another object can access properties and methods.
//  JavaScript objects have an internal prototype link by default, except objects created without a prototype.
//  1 METHOD We can set an object's prototype using `Object.setPrototypeOf(object, prototypeObject)`.
//  2 METHOD`__proto__` is a legacy way to access or set an object's prototype.


// const student = {
//     check() {
//         console.log('All student is present');
//     }
// }

// const teacher1 ={
//     name : 'ATRUBA'
// }
// const teacher2 ={
//     name : 'RIDA'
// }

// teacher1.__proto__ = student;
// Object.setPrototypeOf(teacher1, student);
// console.log(teacher1.check === student.check); // true

// If an object and its prototype have the same method, the object's own method will be used.
// const teacher2 = {
//     name: 'RIDA',
//     check() {
//         console.log('My Student 100% present');
//     }
// }
// teacher2.__proto__ = student;


// ---------------Classes in JS------------------
// Classes are used when we want to create multiple objects using the same template.
// class is a program-code (template, blueprint) for creating objects.
// Those objects will have some state (properties) & some behaviour (functions) inside it.

// The constructor() method initializes a new object.
// The new keyword calls the constructor() when an object is created.
// If we do not define a constructor(), JavaScript provides a default constructor.
// We can initialize and set the object's properties inside the constructor().


// syntax

// class myClass {        // Blueprint
//     constructor() {};
//     myMethod() {};
// }

// const myObj = new myClass(); // Object


// ------------EXAMPLE---------
// class Toyota {
//     constructor(brand,launch) {
//         console.log('creating new object');
//         this.brand = brand;
//         this.launch = launch;
//     }
//     start() {
//         console.log('Start');
//     }
//     stop() {
//         console.log('stop');
//     }
//     brandName(brand) {
//         this.brandCompany = brand;
//     }
// }
// const fortuner = new Toyota('toyota',2026);
// console.log(fortuner);

// const swift = new Toyota('Suzuki',2022);
// console.log(swift);


// console.log(typeof fortuner);
// fortuner.start();
// fortuner.stop();
// fortuner.brandName('toyota');
// swift.brandName('Suzuki');


// ---------------Inheritance in JS------------------
// inheritance is passing down properties & methods from parent class to child class.

//syntax 
// class parent {

// }
// class child extends parent{

// }
// if child & parent have same method, child's method will be used [method overriding].


// ---------EXAMPLE 1----------
// class parent {
//     hello() {
//         console.log('i am come in child');
//     }
// };

// class child extends parent { };
// const obj = new child();



// ---------EXAMPLE 2----------

// class person {
//     constructor(){
//         this.user = 'boss'
//     }
//     eat() {
//         console.log('eating time');
//     }
//     sleep() {
//         console.log('Sleeping time');
//     }
//     // same method but child call own method
//     work(){
//         console.log('work hard');
//     }
// }

// class engineer extends person {
//     work() {
//         console.log('just solving problems');
//     }
// }

// class doctor extends person {
//     check() {
//         console.log('check patients');
//     }
// }

// const Obj1 = new engineer();
// const Obj2 = new doctor();


// ---------------super keyword------------------
// The super keyword is used to call the contructor of its parent class to access the parent's properties and methods.

// ---------EXAMPLE 1----------

// class person {
//     constructor(name) {
//         console.log('enter parent contructor');
//         this.user = 'boss'
//         this.name = name
//     }
//     eat() {
//         console.log('eating time');
//     }
// }

// class engineer extends person {
//     // constructor(name) {
//     //     console.log('enter child contructor');
//     //     super(); // to invoke parent class constructor
//     //     this.name = name;
//     //     console.log('exit child contructor');
//     // }

//     // also do this

//     constructor(name){
//         super(name); // to invoke parent class constructor
//     }
//     work() {
//         super.eat(); // use parent method
//         console.log('just solving problems');
//     }
// }
// const Obj = new engineer('rida');


// ---------EXAMPLE 2----------
// let data = 'secret information'
// class user {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     viewData() {
//         console.log('Data: ', data);

//     }
// }

// class admin extends user {
//     constructor(name, age) {
//         super(name, age);
//     }
//     editData() {
//         data = 'some new data';
//     }
// }
// const student1 = new user('Rida', 21);
// const student2 = new user('Sahoon', 18);

// const teacher = new admin('Atruba', 22);

// final
// Inheritance   	    Parent ki properties aur methods inherit karna
// extends	            Inheritance establish karna
// super()	            Parent constructor call karna
// super.method()	    Parent ka method call karna
// Method overriding	Child class and parent class mein same method hon isko overriding bolty


// --------------------------------------------------------------