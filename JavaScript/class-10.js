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
