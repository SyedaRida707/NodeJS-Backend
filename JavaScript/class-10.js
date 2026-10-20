// 1. What is Inheritance?

// Inheritance is a fundamental concept of Object-Oriented Programming (OOP) in which a child class 
// acquires properties and methods from a parent class.

// Main benefit: Code reusability. It allows us to reuse existing code instead of writing it again.

// Flow: The flow of inheritance is Top to Bottom. This means the Parent class is at the top, and the Child class is below it.

// Example:
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
// const d1 = new Dog();

// d1.eat();
// d1.bark();

// Here, Dog inherits the eat() method from Animal and has its own bark() method.


// ------------Types of Inheritance--------------

// 1. Single Inheritance: One child class inherits from one parent class.
// Example: Animal → Dog

// 2. Multilevel Inheritance: A child class becomes a parent for another class. forming a chain. (Grandparent -> Parent -> Child).
// Example: Animal → Dog → Puppy
// Puppy inherits from Dog, and Dog inherits from Animal.

// 3. Multiple Inheritance: One child class inherits from two or more parent classes.
// Example: Parent A + Parent B → Child

// Note: Python and C++ support multiple inheritance through classes. Java and JavaScript 
// do not support it directly through multiple parent classes.

// 4. Hierarchical Inheritance: Multiple child classes inherit from one parent class.(parent-> child1,child2)
// Example: Animal → Dog, Cat, Cow
// Dog, Cat, and Cow all inherit features from Animal.

// 5. Hybrid Inheritance
// Definition: When two or more types of inheritance are combined, it is called Hybrid Inheritance.
// Example: A structure that combines Multilevel and Hierarchical Inheritance.

// --------------------------------------------------------------

// The extends Keyword
// Definition: The extends keyword is used to create inheritance between classes in JavaScript.

// Syntax:
// class Child extends Parent {}

// Example:

// class Animal {
//   eat() {
//     console.log("Eating");
//   }
// }

// class Dog extends Animal {}

// extends allows Dog to inherit methods from Animal.

// --------------------------------------------------------------

// What is MRO (Method Resolution Order)?
// Definition: MRO stands for Method Resolution Order. It is the order in which a 
// programming language searches classes to find a method or attribute.

// MRO is especially important in Python when multiple inheritance is used.

// Note: JavaScript uses a prototype chain for method lookup rather than Python's class MRO for multiple inheritance.

// example
// class Animal {
//     eat() {
//         console.log("Eating");
//     }
// }

// class Dog extends Animal {}

// let d = new Dog();
// d.eat(); // Eating

// How it works:
// 1. JavaScript first searches in Dog.
// 2. If the method is not found, it searches in Animal.
// 3. When it finds eat(), it executes the method.

// Python uses MRO.
// JavaScript uses the Prototype Chain.

// --------------------------------------------------------------

// What is an Interface?
// Definition: An interface defines a contract that specifies the structure or methods a class should provide.
// An interface describes what a class should provide, rather than implementing all its behavior itself.

// Example in TypeScript:
// ```
// interface Animal {
//     sound(): void;
// }

// class Dog implements Animal {
//     sound() {
//         console.log("Woof!");
//     }
// }
// ```
// Here:
// - interface Animal defines a contract.
// - sound() is the required method.
// - implements Animal means the Dog class follows that contract.
// Important points:
// - JavaScript does not have a built-in interface keyword.
// - TypeScript and Java support interfaces.
// - extends is used for class inheritance.
// - implements is used in TypeScript to follow an interface contract.

// --------------------------------------------------------------

// What is the super Keyword?
// Definition: The super keyword is used in a child class to access the parent class's constructor and methods.

// It has two common uses:
// A. super()
// It calls the parent class's constructor.

// Example:
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }
// }

// const d1 = new Dog("Tommy");
// console.log(d1.name); // Tommy

// Here, super(name) passes the name to the parent constructor.
// Important: In a JavaScript child class constructor, super() must be called before using this.

// B. super.methodName()
// It calls a method defined in the parent class.

// Example:
// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }

// class Dog extends Animal {
//     eat() {
//         super.eat();
//         console.log("Dog is eating");
//     }
// }

// const d1 = new Dog();
// d1.eat();

// Output:
// Animal is eating
// Dog is eating

// Here, super.eat() calls the parent's method, and the child adds its own behavior.

// --------------------------------------------------------------

// instanceof checks whether an object belongs to a class or its prototype chain.

// class Animal {}
// class Dog extends Animal {}
// let d = new Dog();

// console.log(d instanceof Dog);    // true
// console.log(d instanceof Animal); // true
// console.log(d instanceof Array);  // false

// --------------------------------------------------------------