1.  values and variables
    values can be any piece of information (data) stored in variables for later use. This piece of data can be a number, a string, a boolean, an array, an object, a function, etc.
    variables can be described a a container that holds the value

Decaration of variables
variables can be declared using the var, let, and const keywords
var is used to declare variables that are function scoped

What is function scoped?
Function scoped variables are variables that are declared within a function and are only accessible within that function.

What is block scoped?
Block scoped variables are variables that are declared within a block and are only accessible within that block.

What is global scoped?
Global scoped variables are variables that are declared outside of any function and are accessible throughout the entire program.

What is let and const?
let and const are used to declare variables that are block scoped.
let is used to declare variables that can be reassigned
const is used to declare variables that cannot be reassigned
variable namig conventions
variables can be named using camelCase, snake_case, PascalCase, or kebab-case
camelCase is the most common convention and is used for variables that are not constants.
snake_case is used for variables that are constants.
PascalCase is used for classes.
kebab-case is used for variables that are not constants.
variable naming rules
variables can only contain letters, numbers, and underscores
variables cannot start with a number

2.  Data Types
    Data types are the type of data that can be stored in a variable.
    Data types can be classified into two types: primitive data types and non-primitive data types.
    Primitive data types are the data types that are not objects and are not mutable.
    Non-primitive data types are the data types that are objects and are mutable.
    Primitive data types include: number, string, boolean, null, undefined, symbol, and bigint.
    Non-primitive data types include: object, array, function, and date.

3.  Operators
    Operators are symbols that are used to perform operations on variables and values.

Operators can be classified into two types: arithmetic operators, assignment operators, comparison operators, logical operators, and bitwise operators.

Arithmetic operators are used to perform arithmetic operations on variables and values.

Assignment operators are used to assign values to variables.

Comparison operators are used to compare values and return a boolean value.

Logical operators are used to perform logical operations on variables and values.

Bitwise operators are used to perform bitwise operations on variables and values.

4. Functions
   Functions are blocks of code that can be called to perform a specific task.
   Functions can be declared using the function keyword.
   Functions can be called using the function name followed by parentheses.
   Functions can return a value using the return keyword.

SECTION 2: JavaScript Fundamentals - Part 1
Lecture 2: Hello World!
In this lecture, we write our very first JavaScript code using the browser's console. The console is a
great place for testing code and fixing errors, though we won't use it for real applications later.
We can open the console in Chrome using:
Command + Option + J (Mac) / Ctrl + Alt + J (Windows)
Right-click + Inspect → Console tab
Menu → View → Developer → JavaScript Console
Let's write our first JavaScript code:
alert('Hello World!');
// We can write any JavaScript and it gets immediately evaluated
const javascript = 'amazing';
if (javascript === 'amazing') alert("Let's learn JavaScript!");
// We can also do math
40 + 8 + 23 - 10; // 61
// Store results in variables
const totalHours = 40 + 8 + 23 - 10;
totalHours; // 61
The alert creates a popup with our text. This is just a taste of what JavaScript can do!
Lecture 3: A Brief Introduction to JavaScript
JavaScript is a high-level, object-oriented, multi-paradigm programming language. But what does
that actually mean?
As a programming language, JavaScript allows us to write code that instructs computers to perform
actions. Being high-level means we don't need to worry about complex details like memory
management - there are abstractions that make the language easier to write and learn.
JavaScript is object-oriented, meaning it's based on the concept of objects for storing data. It's also
multi-paradigm, allowing different programming styles like imperative and declarative programming.
JavaScript was created in 1995 by Brendan Eich while working at Netscape, originally named Mocha,
then LiveScript, and finally JavaScript (as a marketing decision to piggyback on Java's popularity,
though the languages aren't related).
JavaScript has evolved significantly over time:
ES5 (2009) was the standard for many years
ES6/ES2015 (2015) was a major update with many new features
Since then, we get new releases every year (ES2016, ES2017...)
JavaScript runs in browsers through the JavaScript engine built into each browser (V8 in Chrome,
SpiderMonkey in Firefox). Today, JavaScript can also run outside browsers using Node.js, allowing for
backend development, meaning we can build full-stack applications with JavaScript alone.
Lecture 4: Linking a JavaScript File
While we previously wrote code directly in the console, real development involves writing code in
files. Let's properly connect JavaScript to our HTML document.
We have two options:
-. Write JavaScript directly in HTML using inline script tags:

<script>
const javascript = 'amazing';
if (javascript === 'amazing') alert("Let's learn JavaScript!");
console.log(40 + 8 + 23 - 10);
</script>

/. Link to an external JavaScript file (the better approach):

<!-- In HTML file -->
<script src="script.js"></script>

// In script.js file
const javascript = 'amazing';
if (javascript === 'amazing') alert("Let's learn JavaScript!");
console.log(40 + 8 + 23 - 10);
When using external files, we separate our website content (HTML) from the JavaScript logic, making
code more maintainable. This approach is better for larger projects.
Note that we need to use console.log() to see results in the console when writing code in a file,
unlike when we're working directly in the console.
Lecture 5: Values and Variables
Values are the most fundamental unit of information in programming - pieces of data we want to use
or store. We can store these values in variables to reuse them.
// Values
console.log('Jonas'); // String value
console.log(23); // Number value
console.log(23 + 7); // Expression creating a new value (30)
// Storing values in variables
let firstName = 'Jonas';
console.log(firstName);
console.log(firstName);
When naming variables, follow these rules:
Use camelCase (first word lowercase, subsequent words capitalized)
Names can contain letters, numbers, underscores, or $ signs
Cannot start with a number
Cannot use reserved JavaScript keywords
Variable names should be descriptive
// Valid variable names
let \_age = 26;
let $name = 'Jonas';
let myFirstJob = 'Programmer'; // Descriptive - good!
// Invalid variable names
let 3years = 3; // Cannot start with number
let jonas&matilda = 'JM'; // No special characters
let new = 27; // Cannot use reserved keyword
// Less descriptive - avoid
let job1 = 'Programmer';
let job2 = 'Teacher';
Lecture 6: Data Types
In JavaScript, values can have different types. There are two main categories:
-. Primitive types: Number, String, Boolean, Undefined, Null, Symbol, BigInt
/. Object types: Objects, Arrays, Functions, etc.
JavaScript has dynamic typing - we don't manually define types. The type is automatically
determined when a value is stored and can change when the variable is assigned a new value.
// Different data types
let javascriptIsFun = true; // Boolean
console.log(typeof javascriptIsFun); // "boolean"
console.log(typeof 23); // "number"
console.log(typeof 'Jonas'); // "string"
// Dynamic typing in action - type can change
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun); // Now "string"
// Undefined type
let year; // Value is undefined
console.log(year); // undefined
console.log(typeof year); // "undefined"
// Later define the variable
year = 1991;
console.log(typeof year); // Now "number"
// Note: typeof null returns "object" - this is a bug!
console.log(typeof null); // "object" (should be "null")
Lecture 7: Let, Const, and Var
JavaScript has three ways to declare variables:
// 1. let - for variables that can change (mutable)
let age = 30;
age = 31; // Reassigning is allowed
let firstName; // Can declare empty variables with let
// 2. const - for variables that shouldn't change (immutable)
const birthYear = 1991;
// birthYear = 1990; // Error! Cannot reassign
// const job; // Error! Must be initialized
// 3. var - old way of defining variables (avoid using)
var job = 'Programmer';
job = 'Teacher'; // Can be reassigned like let
As a best practice, use const by default and only use let when you're sure the variable needs to
change. This minimizes variable mutations and potential bugs. Avoid var completely as it has
function scope rather than block scope (we'll learn more about this later).
You can actually create variables without any keyword, but this is terrible practice as it creates
properties on the global object instead of properly scoped variables:
// Don't do this!
lastName = 'Schmedtmann'; // Creates a global object property
Lecture 8: Basic Operators
Operators allow us to transform values and combine multiple values.
// Math operators
const now = 2037;
const ageJonas = now - 1991; // 46
const ageSarah = now - 2018; // 19
console.log(ageJonas, ageSarah);
console.log(ageJonas _ 2); // 92
console.log(ageJonas / 10); // 4.6
console.log(2 \*\* 3); // 2³ = 8 (Exponentiation)
// Concatenation with + operator
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName); // "Jonas Schmedtmann"
// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x _= 4; // x = x \* 4 = 100
x++; // x = x + 1 = 101
console.log(x);
// Comparison operators (return boolean values)
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); // true
console.log(now - 1991 > now - 2018); // true
Lecture 9: Operator Precedence
JavaScript has a well-defined order in which operators are executed, just like in mathematics.
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
// Math before comparison
console.log(now - 1991 > now - 2018); // 46 > 19, so true
// Left-to-right execution for same-precedence operators
console.log(25 - 10 - 5); // (25 - 10) - 5 = 10
// Right-to-left for assignment
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, so x = 10, y = 10
console.log(x, y);
// Grouping with parentheses (highest precedence)
const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge); // (46 + 19) / 2 = 32.5
The complete precedence table can be found in the MDN documentation, but here's a simplified
order:
-. Parentheses ()
/. Increment/decrement ++/-- 0. Exponentiation \*\*

1. Multiply/divide \*/
2. Add/subtract +/-
3. Comparison < > <= >=
4. Equality == !=
5. Assignment = += -= _= /=
   Lecture 11: Strings and Template Literals
   Template literals make it much easier to create strings with variables and expressions embedded in
   them.
   const firstName = 'Jonas';
   const job = 'teacher';
   const birthYear = 1991;
   const year = 2037;
   // Old way (string concatenation)
   const jonasOld =
   "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' +
   job + '!';
   console.log(jonasOld);
   // New way (template literals)
   const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old
${job}!`;
   console.log(jonasNew);
   // Template literals also work for regular strings
   console.log(`Just a regular string!`);
   // Multi-line strings with template literals
   console.log(`String with
multiple
lines`);
   // Old way of multi-line strings (less clean)
   console.log(
   'String with \n\
    multiple \n\
    lines',
   );
   Template literals (backticks) are much more readable and easier to write, making them one of the
   most useful ES6 features.
   Lecture 12: Taking Decisions: if/else Statements
   Conditional statements let us execute different code based on different conditions, giving us more
   control over our program flow.
   const age = 19;
   // If/else conditional statement
   if (age >= 18) {
   console.log('Sarah can start driving license 🚗 ');
   } else {
   const yearsLeft = 18 - age;
   console.log(`Sarah is too young. Wait another ${yearsLeft} years ⏳
`);
   }
   // Creating variables conditionally
   const birthYear = 1991;
   let century;
   if (birthYear <= 2000) {
   century = 20;
   } else {
   century = 21;
   }
   console.log(century);
   The if/else statement structure is:
   if (condition) {
   // Code executed when condition is TRUE
   } else {
   // Code executed when condition is FALSE (optional)
   }
   Lecture 14: Type Conversion and Coercion
   JavaScript handles types in two ways: conversion (explicit) and coercion (automatic).
   // Type Conversion (explicit)
   const inputYear = '1991';
   console.log(Number(inputYear) + 18); // 2009
   // Conversion examples
   console.log(Number('Jonas')); // NaN (Not a Number)
   console.log(String(23)); // "23"
   // Type Coercion (automatic)
   console.log('I am ' + 23 + ' years old'); // String concatenation
   // The + operator triggers coercion to string
   console.log('23' - '10' - 3); // 10
   console.log('23' _ '2'); // 46
   console.log('23' > '18'); // true
   // Other operators trigger coercion to number
   // Mixed coercion example
   let n = '1' + 1; // '11' (string)
   n = n - 1; // 10 (number)
   console.log(n);
   Key points:
   The + operator converts numbers to strings when used with a string
   The -, \*, /, >, < operators convert strings to numbers
   Understanding coercion helps you write cleaner code and avoid unexpected bugs
   Lecture 15: Truthy and Falsy Values
   Falsy values are values that aren't exactly false but become false when converted to a boolean.
   There are only 5 falsy values in JavaScript:
   0
   '' (empty string)
   undefined
   null
   NaN
   Everything else is truthy - they convert to true.
   console.log(Boolean(0)); // false
   console.log(Boolean('')); // false
   console.log(Boolean(undefined)); // false
   console.log(Boolean('Jonas')); // true
   console.log(Boolean({})); // true
   // In practice, conversion to boolean happens implicitly
   // For example, in conditions:
   const money = 0;
   if (money) {
   console.log("Don't spend it all!");
   } else {
   console.log('You should get a job!'); // This executes because 0 is
   falsy
   }
   // Be careful with 0
   let height;
   if (height) {
   console.log('Height is defined');
   } else {
   console.log('Height is UNDEFINED'); // This executes because height
   is undefined
   }
   Lecture 16: Equality Operators: == vs. ===
   JavaScript has two equality operators with different behaviors:
   const age = 18;
   // Strict equality (===) - NO type coercion
   console.log(age === 18); // true
   console.log('18' === 18); // false
   // Loose equality (==) - WITH type coercion
   console.log(age == 18); // true
   console.log('18' == 18); // true
   // Practical example
   const favourite = Number(prompt("What's your favourite number?"));
   if (favourite === 23) {
   console.log('Cool! 23 is an amazing number!');
   } else if (favourite === 7) {
   console.log('7 is also a cool number');
   } else {
   console.log('Number is not 23 or 7');
   }
   // Inequality operators
   const notEqual = favourite !== 23;
   console.log(notEqual);
   As a best practice, always use strict equality (===) to avoid unexpected type coercion bugs. If you
   need to compare values of different types, convert them explicitly before comparison.
   Lecture 17: Boolean Logic
   Boolean logic uses TRUE and FALSE values combined with logical operators:
   AND (&&): TRUE only if ALL operands are TRUE
   OR (||): TRUE if at least ONE operand is TRUE
   NOT (!): Inverts the value (TRUE becomes FALSE, FALSE becomes TRUE)
   Truth tables and examples:
   A AND B: TRUE only when both A and B are TRUE
   A OR B: TRUE when either A or B or both are TRUE
   NOT A: TRUE when A is FALSE, FALSE when A is TRUE
   We'll apply these in the next lecture with JavaScript logical operators.
   Lecture 18: Logical Operators
   JavaScript implements boolean logic with the && (AND), || (OR), and ! (NOT) operators.
   const hasDriversLicense = true; // A
   const hasGoodVision = true; // B
   const isTired = false; // C
   // AND operator
   console.log(hasDriversLicense && hasGoodVision); // true
   // OR operator
   console.log(hasDriversLicense || hasGoodVision); // true
   // NOT operator
   console.log(!hasDriversLicense); // false
   // Practical example
   const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
   if (shouldDrive) {
   console.log('Sarah is able to drive!');
   } else {
   console.log('Someone else should drive...');
   }
   // Complex conditions
   console.log(hasDriversLicense && hasGoodVision && !isTired); // true
   These operators are essential for creating complex conditions in if/else statements.
   Lecture 20: The Switch Statement
   The switch statement is an alternative to if/else when comparing a value against multiple options.
   const day = 'monday';
   switch (day) {
   case 'monday': // day === 'monday'
   console.log('Plan course structure');
   console.log('Go to coding meetup');
   break; // Without break, code would continue to next case
   case 'tuesday':
   console.log('Prepare theory videos');
   break;
   case 'wednesday':
   case 'thursday': // Same code for both days
   console.log('Write code examples');
   break;
   case 'friday':
   console.log('Record videos');
   break;
   case 'saturday':
   case 'sunday':
   console.log('Enjoy the weekend :D');
   break;
   default: // Like 'else' - runs if no case matches
   console.log('Not a valid day!');
   }
   // Equivalent if/else structure
   if (day === 'monday') {
   console.log('Plan course structure');
   console.log('Go to coding meetup');
   } else if (day === 'tuesday') {
   console.log('Prepare theory videos');
   } else if (day === 'wednesday' || day === 'thursday') {
   console.log('Write code examples');
   } else if (day === 'friday') {
   console.log('Record videos');
   } else if (day === 'saturday' || day === 'sunday') {
   console.log('Enjoy the weekend :D');
   } else {
   console.log('Not a valid day!');
   }
   The switch statement can be more readable for cases where you're comparing a single value against
   multiple options.
   Lecture 21: Statements and Expressions
   Understanding the difference between statements and expressions helps write better JavaScript.
   Expression: A piece of code that produces a value
   3 + 4;
   1991;
   true && false && !false;
   Statement: A larger piece of code that doesn't produce a value by itself
   if (23 > 10) {
   const str = '23 is bigger!';
   }
   In template literals, we can only insert expressions, not statements:
   console.log(`I'm ${2037 - 1991} years old`); // Works (expression)
   // console.log(`I'm ${if (age > 18) { 'an adult' }}`); // ERROR
   (statement)
   Lecture 22: The Conditional (Ternary) Operator
   The ternary operator allows us to write compact if/else statements in a single line.
   const age = 23;
   // Ternary operator
   const drink = age >= 18 ? 'wine 🍷 ' : 'water 💧 ';
   console.log(drink); // "wine 🍷 "
   // Equivalent if/else
   let drink2;
   if (age >= 18) {
   drink2 = 'wine 🍷 ';
   } else {
   drink2 = 'water 💧 ';
   }
   console.log(drink2); // "wine 🍷 "
   // Using ternary in template literal (since it's an expression)
   console.log(`I like to drink ${age >= 18 ? 'wine 🍷 ' : 'water 💧 '}`);
   The ternary operator is perfect for quick decisions, especially when we need to use the result as a
   value in another operation. However, it doesn't replace if/else for complex logic with multiple lines of
   code.
   Lecture 24: JavaScript Releases: ES5, ES6+, and ESNext
   JavaScript has evolved significantly since its creation:
   ES5 (2009): The standard for many years
   ES6/ES2015 (2015): A major update with many features we've used:
   let/const
   Arrow functions
   Template literals
   Classes
   Destructuring
   And many more!
   ES2016-ES2022: Annual smaller releases with new features
   Modern browsers automatically update, supporting the latest features. For older browsers, we can
   use tools like Babel to convert modern code to ES5.
   The language continues to evolve, with proposals for new features constantly being considered
   through a 4-stage process before becoming part of the official standard.

SECTION 3: JavaScript Fundamentals - Part 2
Lecture 2: Activating Strict Mode
JavaScript's strict mode is an important feature that helps developers avoid accidental errors. To
activate it, you simply add 'use strict'; at the very beginning of your JavaScript file, before any
other code (comments are allowed).
'use strict';
// Now strict mode is activated for the entire script
Strict mode creates visible errors where JavaScript would otherwise fail silently. For example:
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true; // Typo! Missing 's'
if (hasDriversLicense) console.log('I can drive 😃 ');
Without strict mode, this code would silently create a new global variable hasDriverLicense (with
the typo) and the condition would never be true. With strict mode, JavaScript throws an error, making
the bug obvious.
Strict mode also reserves certain keywords for future JavaScript features and prevents using them as
variable names, like:
const interface = 'Audio'; // Error in strict mode
const private = 534; // Error in strict mode
Lecture 3: Functions
Functions are fundamental building blocks in JavaScript. They are reusable pieces of code that can
be executed whenever needed.
The simplest form of a function is a function declaration:
function logger() {
console.log('My name is Jonas!');
}
// Calling/running/invoking the function
logger();
logger();
Functions can receive input data (parameters) and return output data:
function fruitProcessor(apples, oranges) {
console.log(apples, oranges);
const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
return juice;
}
// Using the function with arguments 5 and 0
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// Reusing the function with different inputs
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
In this example:
apples and oranges are parameters (placeholders)
5, 0, 2, and 4 are arguments (actual values)
The function processes these inputs and returns a string
Functions help us write DRY code (Don't Repeat Yourself), which is an important clean code principle.
Lecture 4: Function Declarations vs. Expressions
JavaScript offers multiple ways to create functions. The two main types are function declarations and
function expressions.
Function Declaration:
function calcAge1(birthYear) {
return 2037 - birthYear;
}
const age1 = calcAge1(1991);
Function Expression:
const calcAge2 = function (birthYear) {
return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2); // Both produce the same result
The main difference between them is that function declarations can be called before they're defined
in the code (due to a process called hoisting), while function expressions cannot:
// This works
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
return 2037 - birthYear;
}
// This would cause an error if placed before the function expression
const age2 = calcAge2(1991);
const calcAge2 = function (birthYear) {
return 2037 - birthYear;
};
Both have their place in JavaScript, and which one you use often comes down to personal preference.
Lecture 5: Arrow Functions
Arrow functions were introduced in ES6 as a shorter form of function expressions, especially useful
for simple one-line functions:
// Arrow function with one parameter and implicit return
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
// Arrow function with multiple parameters and multiple lines of code
const yearsUntilRetirement = (birthYear, firstName) => {
const age = 2037 - birthYear;
const retirement = 65 - age;
return `${firstName} retires in ${retirement} years!`;
};
console.log(yearsUntilRetirement(1991, 'Jonas'));
Key points about arrow functions:
-. For one parameter and one-line body, you can omit parentheses around parameters and curly
braces
/. With a one-liner without curly braces, the return is implicit 0. For multiple parameters, you need parentheses: (param1, param2) => expression

1. For multiple lines of code, you need curly braces and an explicit return statement
2. Arrow functions don't have their own this keyword (important for more advanced JavaScript)
   Lecture 6: Functions Calling Other Functions
   In JavaScript, it's common for one function to call another function. This allows us to break down
   complex problems into smaller, reusable parts.
   // Function to cut fruit into pieces
   const cutPieces = function (fruit) {
   return fruit \* 4;
   };
   // Function that uses the cutPieces function
   const fruitProcessor = function (apples, oranges) {
   const applePieces = cutPieces(apples);
   const orangePieces = cutPieces(oranges);
   const juice = `Juice with ${applePieces} pieces of apple and
${orangePieces} pieces of orange.`;
   return juice;
   };
   console.log(fruitProcessor(2, 3));
   In this example, the fruitProcessor function calls the cutPieces function twice. This approach
   follows the DRY principle - if we later need to change how fruits are cut (e.g., cut into 3 pieces instead
   of 4), we only need to change it in one place.
   Lecture 7: Reviewing Functions
   Let's review the key concepts we've learned about functions:
   const calcAge = function (birthYear) {
   return 2037 - birthYear;
   };
   const yearsUntilRetirement = function (birthYear, firstName) {
   const age = calcAge(birthYear);
   const retirement = 65 - age;
   if (retirement >= 0) {
   return `${firstName} retires in ${retirement} years!`;
   } else {
   return `${firstName} is already retired 🎉 `;
   }
   };
   console.log(yearsUntilRetirement(1991, 'Jonas'));
   console.log(yearsUntilRetirement(1969, 'Mark'));
   Important points about functions:
   -. Functions can call other functions (like calcAge inside yearsUntilRetirement)
   /. Parameters are like local variables that only exist inside the function
3. Functions with the same parameter names don't interfere with each other
4. The return statement immediately exits the function - any code after it won't run
5. Functions can return different values based on conditions (like our retirement example)
6. Functions can be stored as values and accessed through the console
   Functions are fundamental in JavaScript and understanding them well is critical for becoming
   proficient.
   Lecture 9: Introduction to Arrays
   Arrays allow us to store multiple related values in a single variable, rather than creating separate
   variables for each value:
   // Instead of this:
   const friend1 = 'Michael';
   const friend2 = 'Steven';
   const friend3 = 'Peter';
   // We can use an array:
   const friends = ['Michael', 'Steven', 'Peter'];
   console.log(friends);
   // Alternative syntax (less common)
   const years = new Array(1991, 1984, 2008, 2020);
   Accessing array elements (using zero-based indexing):
   console.log(friends[0]); // Michael
   console.log(friends[2]); // Peter
   // Getting the array length
   console.log(friends.length); // 3
   // Getting the last element
   console.log(friends[friends.length - 1]); // Peter
   Arrays can be mutated even when declared with const:
   friends[1] = 'Jay'; // Replace 'Steven' with 'Jay'
   console.log(friends); // ['Michael', 'Jay', 'Peter']
   // However, this would not work:
   // friends = ['Bob', 'Alice']; // Error! Cannot reassign const
   variable
   Arrays can hold values of different types:
   const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher',
   friends];
   console.log(jonas);
   Example of using arrays with functions:
   const calcAge = function (birthYear) {
   return 2037 - birthYear;
   };
   const years = [1990, 1967, 2002, 2010, 2018];
   const ages = [
   calcAge(years[0]),
   calcAge(years[1]),
   calcAge(years[years.length - 1]),
   ];
   console.log(ages); // [47, 70, 19]
   Lecture 10: Basic Array Operations (Methods)
   JavaScript provides built-in methods to manipulate arrays:
   Adding elements:
   const friends = ['Michael', 'Steven', 'Peter'];
   // Add to end
   friends.push('Jay');
   console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
   // Add to beginning
   friends.unshift('John');
   console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']
   Push and unshift both return the new array length:
   const newLength = friends.push('Andrew');
   console.log(newLength); // 6
   Removing elements:
   // Remove from end
   const popped = friends.pop();
   console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']
   console.log(popped); // 'Andrew'
   // Remove from beginning
   const shifted = friends.shift();
   console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
   console.log(shifted); // 'John'
   Finding elements:
   console.log(friends.indexOf('Steven')); // 1
   console.log(friends.indexOf('Bob')); // -1 (not found)
   // ES6 method - returns boolean
   console.log(friends.includes('Steven')); // true
   console.log(friends.includes('Bob')); // false
   The includes method is useful for conditionals:
   if (friends.includes('Peter')) {
   console.log('You have a friend called Peter!');
   }
   Lecture 12: Introduction to Objects
   While arrays are great for ordered data, objects let us define key-value pairs:
   const jonas = {
   firstName: 'Jonas',
   lastName: 'Schmedtmann',
   age: 2037 - 1991,
   job: 'teacher',
   friends: ['Michael', 'Peter', 'Steven'],
   };
   This is called an object literal syntax - we're literally writing down the object content.
   Objects allow us to:
   Give each piece of data a name (key or property name)
   Store unstructured and related data
   Access data by its name rather than position
   Unlike arrays, the order of properties in objects doesn't matter when retrieving data.
   Lecture 13: Dot vs. Bracket Notation
   There are two ways to access object properties:
   Dot Notation:
   const jonas = {
   firstName: 'Jonas',
   lastName: 'Schmedtmann',
   age: 2037 - 1991,
   job: 'teacher',
   friends: ['Michael', 'Peter', 'Steven'],
   };
   console.log(jonas.lastName); // 'Schmedtmann'
   Bracket Notation:
   console.log(jonas['lastName']); // 'Schmedtmann'
   The main difference is that bracket notation allows us to use expressions:
   const nameKey = 'Name';
   console.log(jonas['first' + nameKey]); // 'Jonas'
   console.log(jonas['last' + nameKey]); // 'Schmedtmann'
   // This would NOT work with dot notation:
   // console.log(jonas.'last' + nameKey); // Error
   Bracket notation is useful when we don't know which property to access until runtime:
   const interestedIn = prompt('What do you want to know about Jonas?');
   if (jonas[interestedIn]) {
   console.log(jonas[interestedIn]);
   } else {
   console.log(
   'Wrong request! Choose between firstName, lastName, age, job and
   friends.',
   );
   }
   We can also add new properties to objects using either notation:
   jonas.location = 'Portugal';
   jonas['twitter'] = '@jonasschmedtman';
   console.log(jonas);
   Lecture 14: Object Methods
   Since functions are just values in JavaScript, we can add them as properties to objects:
   const jonas = {
   firstName: 'Jonas',
   lastName: 'Schmedtmann',
   birthYear: 1991,
   job: 'teacher',
   friends: ['Michael', 'Peter', 'Steven'],
   hasDriversLicense: true,
   // Method (function as property)
   calcAge: function () {
   // 'this' refers to the current object (jonas)
   this.age = 2037 - this.birthYear;
   return this.age;
   },
   getSummary: function () {
   return `${this.firstName} ${
this.lastName
} is a ${this.calcAge()}-year old ${this.job}. He has ${
this.friends.length
} friends and ${this.hasDriversLicense ? 'a' : 'no'} driver's
license.`;
   },
   };
   Functions attached to objects are called methods. We can call them like this:
   console.log(jonas.calcAge()); // 46
   console.log(jonas.age); // 46
   // Using the getSummary method
   console.log(jonas.getSummary());
   // "Jonas Schmedtmann is a 46-year old teacher. He has 3 friends and a
   driver's license."
   In object methods, the this keyword refers to the object calling the method. This allows methods to
   access and manipulate the object's other properties.
   The calcAge method not only returns the age but also creates a new age property on the object,
   saving us from recalculating it every time.
   Lecture 16: Iteration: The for Loop
   Loops allow us to automate repetitive tasks. The for loop is commonly used when you know exactly
   how many iterations you need:
   for (let rep = 1; rep <= 10; rep++) {
   console.log(`Lifting weights repetition ${rep}
