// 1. System Design
// Definition: System Design is the process of planning the structure and components of an application.
// Example: Planning a shopping website, including login, products, database, and payment system.

// 2. Design Pattern
// Definition: A Design Pattern is a reusable solution to a common problem in software development.
// Example: Singleton Pattern ensures that only one instance of a class is created and reused.

// Difference
// System Design	                          Design Pattern
// Plans the whole system.	                  Solves a specific coding problem.
// Focuses on system structure.	              Focuses on reusable code solutions.
// Example: Shopping website architecture.    Example: Singleton, Factory, Observer.

// System Design = How to build the whole application?
// Design Pattern = How to solve a common coding problem?

// --------------------------------------------------------------


// OOPs (Object-Oriented Programming) Introduction

// OOP is a programming paradigm that focuses on creating objects. objects are a bit different (prototype-based).
// In classic OOPs, a class acts as a blueprint. It combines data (properties) and
// functions (methods) into one unit.

// Class and Object
// - Class: A blueprint used to create objects.
// - Object: An instance created from a class.
// - Method: A function defined inside a class.

// --------------------------------------------------------------

// Constructor
// A constructor is a special method that initializes an object's properties.
// It runs automatically when an object is created using new.

// class Student {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const s1 = new Student("Ali");

// --------------------------------------------------------------

// this Keyword

// The this keyword refers to the current object in a method.
// Its value depends on how the function is called.

// We use this to access or set an object's properties.

// this.name = name;
// Here, this.name is the object's property, and name is the value passed as an argument.

// --------------------------------------------------------------

// Attributes (Properties)
// Attributes are variables that store an object's or class's data.

// There are two common types in JavaScript classes:
// - Instance property: Belongs to an individual object. Example: this.name
// - Static property: Belongs to the class itself and is shared at the class level. Example: static university = "Ilma University"

// Easy example:

// class Student {
//     static university = "Ilma University";

//     constructor(name) {
//         this.name = name;
//     }
// }
// const obj = new Student('Mutib');

// console.log(Student.university);
// console.log(obj.name);


// - this.name → Each student has their own name.
// - Student.university → The university property belongs to the class.

// --------------------------------------------------------------

// State & Memory:

//   · State: How data currently looks in memory at a specific time.

// let age = 19; // State: 19
// age = 20;     // State: 20 

// State is the current value or condition of data at a specific time.

//   · RAM: Temporary memory (data is lost when power is off).

//   · Hard Disk: Persistent storage (data remains saved).


// --------------------------------------------------------------

// Data Integrity
// Data integrity is the accuracy, consistency, and reliability of data. It ensures that data remains 
// correct and is not improperly changed or corrupted.

// Example
// A university stores a student's record:
// - Student Name: Ali
// - Student ID: 101
// - Marks: 85

// If Ali's actual marks are 85 but 850 are stored in the database by mistake, data integrity is affected.

// Importance of Data Integrity
// 1. It keeps data accurate and correct.
// 2. It prevents incorrect information.
// 3. It maintains reliable records.
// 4. It helps make correct decisions.

// Remember: Data Integrity = Correct and reliable data.

// --------------------------------------------------------------

// Input Sanitization
// Input sanitization is the process of cleaning or transforming user input into a suitable format. 
// It helps maintain data quality and reduce security risks.

// Example in JavaScript
// let name = "   Ali   ";
// let cleanName = name.trim();
// console.log(cleanName); // "Ali"


// Explanation:
// - name contains extra spaces.
// - trim() removes spaces from the beginning and end.
// - cleanName contains "Ali".

// Validation vs. Sanitization
// Validation	                            Sanitization
// Checks whether input follows the rules.	Cleans or transforms input into a suitable format.
// Example: Age must be 18 or above.	    Example: Removing extra spaces from a name.

// Importance of Input Sanitization
// 1. It helps maintain clean data.
// 2. It helps remove unwanted characters or formatting.
// 3. It can reduce security risks when combined with appropriate security measures.

// Note: trim() alone does not provide complete security. Websites also need proper validation
// and context-specific protections.

// Remember: Input Sanitization = Clean or transform user input.

// --------------------------------------------------------------

// What Does the static Keyword Do?
// The static keyword in JavaScript is used to define properties or methods that belong to the class itself 
// rather than its individual objects (instances).

// Example
// class Student {
//     constructor(name) {
//         this.name = name;
//     }

//     static university = "Ilma University";

//     showName() {
//         console.log(this.name);
//     }

//     static showUniversity() {
//         console.log(Student.university);
//     }
// }

// const s1 = new Student("Ali");
// const s2 = new Student("Sara");

// console.log(s1.name); // Ali
// console.log(s2.name); // Sara

// console.log(Student.university);
// // Ilma University

// Student.showUniversity();
// // Ilma University

// Calling s1.showUniversity() produces a TypeError because the static method is not available on the instance.

// Normal members	                Static members
// Belong to individual objects.	Belong to the class itself.
// Accessed through an object.	    Accessed through the class name.
// Example: s1.showName()	        Example: Student.showUniversity()

// Remember: Normal = Object, Static = Class.

// --------------------------------------------------------------