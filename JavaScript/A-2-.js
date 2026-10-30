// 1. Basic Function
// What will be the output?

// function greet() {
//     console.log("Hello!");
// }

// greet();

// 2. Function Without Calling
// What will happen?

// function greet() {
//     console.log("Hello!");
// }
// Will "Hello!" be printed? Explain why.
// Defining a function does not execute it. The function runs only when we call it.

// 3. Calling a Function Multiple Times
// What will be the output?

// function greet() {
//     console.log("Welcome");
// }

// greet();
// greet();
// greet();

// it will print 3 times

// 4. Function with a Parameter
// What will be printed?

// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("Ali");
// What is name in this example?
// name is the parameter and it print (hello Ali)

// 5. Different Arguments
// Predict the output:

// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("Ali");
// greet("Sara");
// greet("Ahmed");
// i will give the same name we give it in the calling time.
// hello Ali, hello Sara, hello Ahmed

// 6. Two Parameters
// What will be printed?

// function add(a, b) {
//     console.log(a + b);
// }

// add(10, 20);
// i will sum of two value 30

// 7. Parameter vs Argument
// Look at this code:

// function multiply(x, y) {
//     console.log(x * y);
// }

// multiply(5, 4);

// Identify:
// The parameters
// The arguments
// The output

// Paraters is x,y Arguments is 5,4 Output 20

// 8. Return Value
// What will be the output?

// function add(a, b) {
//     return a + b;
// }

// let result = add(10, 20);

// console.log(result);
// 30

// 9. return vs console.log()
// What will be printed?

// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 3));

// return → sends the value back.
// console.log() → displays the value in the console.

// 10. Function Returning a Value
// Predict the output:

// function square(number) {
//     return number * number;
// }

// let answer = square(6);

// console.log(answer); // 36

// 11. Function Without Return
// What will be printed?

// function add(a, b) {
//     console.log(a + b);
// }

// let result = add(5, 10);

// console.log(result);
// Explain why the second output is different from the first.
// because we did'nt return anything that is why its output is undefined

// 12. Multiple Operations
// What is the output?

// function calculate(a, b) {
//     let sum = a + b;
//     let product = a * b;

//     return sum + product;
// }

// console.log(calculate(2, 3)); // 11

// 13. Function with Condition
// What will be printed?

// function checkAge(age) {
//     if (age >= 18) {
//         return "Adult";
//     } else {
//         return "Minor";
//     }
// }

// console.log(checkAge(20)); // Adult
// console.log(checkAge(15)); // Minor

// 14. Function with &&
// What will be printed?

// function canDrive(age, hasLicense) {
//     return age >= 18 && hasLicense;
// }

// console.log(canDrive(20, true)); // ture
// console.log(canDrive(16, true)); // false
// console.log(canDrive(20, false)); // false

// 15. Function with ||
// Predict the output:

// function canEnter(hasTicket, isVIP) {
//     return hasTicket || isVIP;
// }

// console.log(canEnter(true, false)); // ture
// console.log(canEnter(false, true)); // ture
// console.log(canEnter(false, false)); // false

// 16. Default Parameter
// What will be printed?

// function greet(name = "Guest") {
//     console.log("Hello " + name);
// }

// greet("Ali");// Hello Ali
// greet();// Hello Guest

// 17. Multiple Parameters
// Find the output:

// function introduce(name, age, department) {
//     console.log(name);
//     console.log(age);
//     console.log(department);
// }

// introduce("Ali", 21, "Physics");// Ali 21 Physics

// 18. Function Expression
// What will be printed?

// const greet = function() {
//     console.log("Hello");
// };

// greet();
// What is different about this function compared with a normal function declaration?
// A function expression is stored in a variable. In this example, the function 
// is anonymous because it has no name after the function keyword.
// A normal function declaration has a name after the function keyword.

// 19. Arrow Function
// Predict the output:

// const add = (a, b) => {
//     return a + b;
// };

// console.log(add(4, 6)); // 10

// 20. Short Arrow Function
// What will be printed?

// const square = number => number * number;

// console.log(square(5)); //25

// 21. Function + Array
// What will be printed?

// function getFirstElement(numbers) {
//     return numbers[0];
// }

// let values = [10, 20, 30, 40];

// console.log(getFirstElement(values)); // 10

// 22. Function + Object
// Predict the output:

// function getStudentName(student) {
//     return student.name;
// }

// let student = {
//     name: "Ahmed",
//     age: 21,
//     marks: 85
// };

// console.log(getStudentName(student)); // Ahmed

// 23. Function + Array of Objects
// What will be printed?

// function getMarks(student) {
//     return student.marks;
// }

// let students = [
//     { name: "Ali", marks: 70 },
//     { name: "Sara", marks: 85 },
//     { name: "Ahmed", marks: 60 }
// ];

// console.log(getMarks(students[1])); // 85

// 24. Scope
// What will happen?

// function test() {
//     let message = "Hello";
//     console.log(message);
// }

// test();
// console.log(message);

// Will both console.log() statements work? Explain.
// The first `console.log()` will work and print "Hello" because the variable `message` 
// is declared inside the function.

// The second `console.log()` will give a ReferenceError because `message` 
// is a local variable and cannot be accessed outside the function.

// This is called function scope.


// 25. Function Calling Another Function
// What will be the output?

// function square(number) {
//     return number * number;
// }

// function calculate(number) {
//     return square(number) + 10;
// }

// console.log(calculate(5));
// Trace the execution step by step.
// First, the `calculate()` function is called with the argument `5`. 
// Then, it calls the `square()` function, which returns `25`. After 
// that, the `calculate()` function adds `10` to `25` and returns `35`. 
// Finally, `console.log()` prints `35`.

// 26. What is a Function?
// What is a function in JavaScript?
// A function is a reusable block of code that performs a specific task.

// Why do programmers use functions instead of writing the same code repeatedly?
// Programmers use functions to reuse code and avoid writing the same code again and again. 
// Functions make code shorter, easier to read, and easier to maintain.

// 27. Function Declaration
// Explain the structure of a function declaration:

// function functionName(parameters) {
//     // code
// }

// Explain what each part means.
// function: It is a keyword used to declare a function.
// functionName: It is the name of the function.
// parameters: These are variables written inside parentheses () that receive values.
// { }: These curly braces define the function body.
// Function body: It contains the code that performs a specific task.


// 28. Calling a Function
// What does it mean to call/invoke a function?
// Calling a function means executing the function after declaring it.

// Explain the difference between:   greet; and greet();
// greet; refers to the function but does not execute it.
// greet(); calls and executes the function.

// 29. Parameters
// What is a parameter?
// A parameter is a variable that receives a value when a function is called.

// Explain using:
// function greet(name) {
//     console.log(name);
// }

// 30. Arguments
// What is an argument?
// An argument is a value passed to a function when it is called.

// In the following code, identify the arguments:
// argument are 10 and 20
// function add(a, b) {
//     return a + b;
// }

// add(10, 20);

// 31. Parameter vs Argument
// Explain the difference between a parameter and an argument.
// A parameter is a variable that receives a value when a function is called.
// An argument is a value passed to a function when it is called.

// Give your own example.
// function sum(a,b){
//     console.log(a+b);
// }
// sum(2,3);
// 2,3 argument , a,b parameyers


// 32. Return
// What is the purpose of the return statement?
// The return statement is used to send a value back from a function. 
// After return, the function stops executing.

// Why would we use:
// We use `return` to send a value back from a function so we can use it later.

// return result;
// instead of simply: console.log(result);
// We use return to send a value back so that we can store it in a variable or 
// use it in other calculations. console.log() is used only to display a value in the console.

// 33. return vs console.log()
// Explain the conceptual difference between:
// console.log() is used to display a value in the console, 
// while return is used to send a value back from a function. 
// After return, the function stops executing.

// console.log() and return When would you use each one?
// console.log(): We use it to print or display information in the console.
// return: We use it when we want to send a value back from a function so we can use it later.

// 34. Why Functions Are Useful
// List at least four advantages of using functions in a program.

// Think about:

// Reusability
// Organization
// Debugging
// Readability
// Maintenance

// 35. Function Parameters
// Can a function have:

// Zero parameters?
// One parameter?
// Multiple parameters?
// Give an example of each.

// function say(){
//     console.log('hi'); 
// }

// function say(name){
//     console.log('hi',name); 
// }

// function say(name,FatherName){
//     console.log('hi',name, FatherName); 
// }

// 36. Default Parameters
// What is a default parameter?
// A default parameter is a parameter that has a default value. 
// This value is used when no argument is provided.

// Explain:
// function greet(name = "Guest") {
//     console.log(name);
// }
// What happens when: greet(); is called?
// When greet() is called without an argument, the function uses the default value "Guest" 
// for the name parameter.

// 37. Function Expression
// What is a function expression?
// A function expression is a function stored in a variable. It can be anonymous or named.

// Explain:
// const greet = function() {
//     console.log("Hello");
// };
// How is it different from a function declaration?
// A function expression stores a function in a variable, 
// while a function declaration defines a function with a name.


// 38. Arrow Functions
// What is an arrow function?
// an arrow function is similar to the normal function just syntax change
// An arrow function is a shorter way to write a function in JavaScript. It uses the => symbol.

// Convert the following function into an arrow function:
// function add(a, b) {
//     return a + b;
// }

// convert
// const add = (a, b) => {
//     return a + b;
// }