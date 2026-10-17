// (OBJECT ORIENTED PROGRAMMING)-OOP

// fundamental diff b/w OOP and functional programming? what's the problem and where and when to use?

// 1. What is OOP?
// Object-Oriented Programming (OOP) is a programming approach that organizes code around objects.
// Objects contain data (properties) and behavior (methods).

// Example:


// Object literal
// const student = {
//     name: "Rida",
//     introduce() {
//         console.log(this.name);
//     }
// };

// Here, the object contains both data and a method.

// Class
// class Student {
//     constructor(name) {
//         this.name = name;
//     }

//     introduce() {
//         console.log(this.name);
//     }
// }

// const student1 = new Student("Rida");
// const student2 = new Student("Ali");

// student1.introduce()
// student2.introduce();
// student.introduce();

// class Student → object banane ka blueprint.
// constructor() → naye object ki properties initialize karta hai.
// new Student("Rida") → naya object banata hai.
// introduce() → method hai.





// 2. What is Functional Programming?
// Functional Programming (FP) is a programming approach that uses functions to process and transform data.
// avoiding unnecessary changes to existing data.

// Example:

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.filter(num => num > 3);
// console.log(result); // [4, 5]

// Here, the function processes the array and returns a new array.




// 3. Fundamental Differences

// OOP organizes code around objects, while FP organizes code around functions.
// OOP combines data and methods in objects, while FP uses functions to process data.

// OOP commonly uses classes, objects and inheritance.
// FP commonly uses pure functions, immutability and higher-order functions.

// OOP may involve changing object state, while FP encourages avoiding unnecessary state changes.





// 4. Problems They Solve

// OOP: Helps organize complex programs by grouping related data and behavior into objects.
// FP: Helps process and transform data through reusable functions, often with fewer side effects.


// What problems do OOP and FP solve?

// ------------------Problem with OOP------------------
// Suppose you are creating a school management system. It has hundreds of students, teachers and courses.
// If you manage everything through separate variables and functions, organizing related data and 
// functionality can become difficult.
// Solution: OOP allows us to organize related data and methods into objects.
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     study() {
//         console.log(`${this.name} is studying`);
//     }
// }

// const student1 = new Student("Ali", 20);
// student1.study();

// Here, the Student class provides a reusable blueprint for creating student objects.



// ------------------Problem with Functional Programming------------------

// Suppose you have hundreds of products and want to find products that cost more than 500 rupees.
// Writing separate logic for every product would be repetitive.
// Solution: FP allows us to use reusable functions to process data.

// const prices = [100, 700, 300, 900, 200];
// const expensivePrices = prices.filter(price => price > 500);
// console.log(expensivePrices); // [700, 900]

// Here, filter() returns a new array containing prices greater than 500 without modifying the original array.



// 5. WHERE AND WHEN TO USE OOP

// OOP is useful when a program contains entities
// with related data and behavior.

// Examples:
// 1. Student management systems
// 2. Banking applications
// 3. E-commerce systems
// 4. Games with players and characters
// 5. Applications with complex business objects


// 6. WHERE AND WHEN TO USE FP

// FP is useful when data needs to be processed,
// calculated, filtered, or transformed.

// Examples:
// 1. Filtering products by price
// 2. Calculating shopping cart totals
// 3. Processing API data
// 4. Transforming arrays using map(), filter(), and reduce()
// 5. Writing predictable and reusable functions


// 7. CAN WE USE OOP AND FP TOGETHER?

// Yes, JavaScript supports both OOP and FP.
// Example:
// An e-commerce application can use OOP to organize product objects
// and FP to calculate discounts or filter products.


// CONCLUSION
// Neither approach is always better.
// Choose the approach that makes the code easier to understand,
// maintain, and test.


// --------------------------------------------------------------

// OOP have 4 pillars

// 1. Encapsulation
// Meaning: Encapsulation means combining data and methods in one class and protecting the data from direct access.
// Real-life example: A bank account. You can check your balance, but you cannot directly access its private balance property.

// class BankAccount {
//     // class attribute, instance
//     #balance = 1000;
//     constructor(){
//         // instance attribute
//         this.#balance = this.#balance
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// const account = new BankAccount();

// console.log(account.getBalance()); // 1000
// // console.log(account.#balance); // Error

// How does it work?
// - #balance is a private property.
// - getBalance() is a public method. => getter
// - We can access the balance through getBalance().
// - We cannot directly access #balance from outside the class.

// Remember: Encapsulation = Data protection.



// 2. Inheritance
// Meaning: Inheritance allows one class to use the properties and methods of another class.
// Real-life example: A dog is an animal. It can have its own behavior and also use behaviors common to animals.
// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Dog is barking");
//     }
// }

// const dog = new Dog();

// dog.eat();  // Animal is eating
// dog.bark(); // Dog is barking

// How does it work?
// - Animal is the parent class.
// - Dog is the child class.
// - extends allows Dog to inherit from Animal.
// - The dog object can use both eat() and bark().

// Remember: Inheritance = Code reusability.


// 3. Polymorphism
// Meaning: Polymorphism means "many forms." The same method name can produce different behaviors for different objects.
// Real-life example: Different animals make different sounds.
// class Dog {
//     sound() {
//         console.log("Bark");
//     }
// }

// class Cat {
//     sound() {
//         console.log("Meow");
//     }
// }

// const dog = new Dog();
// const cat = new Cat();

// dog.sound(); // Bark
// cat.sound(); // Meow


// How does it work?
// - Both classes have a method named sound().
// - The dog object's method prints Bark.
// - The cat object's method prints Meow.
// - The same method name produces different outputs.

// Remember: Polymorphism = Same method, different behavior.


// 4. Abstraction
// Meaning: Abstraction means hiding internal implementation details and showing only the necessary functionality.
// Real-life example: When you start a car, you use the start button or key. You do not need to know all the internal engine operations.
// class Car {
//     start() {
//         this.#startEngine();
//         console.log("Car started");
//     }

//     #startEngine() {
//         console.log("Engine started");
//     }
// }

// const car = new Car();

// car.start();

// // Engine started
// // Car started


// How does it work?
// - start() is the public method.
// - #startEngine() is a private method.
// - The user calls start() without needing to know the internal implementation.
// - The internal engine operation is hidden from direct access.

// Remember: Abstraction = Hide implementation details.


// --------------------------------------------------------------

// Decorator function?