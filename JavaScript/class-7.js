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
