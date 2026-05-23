"use strict";
// VALUES AND VARIABLES
/**
 * Values are the smallest unit of information that we have in JavaScript
 *
 * While Variables are containers that hold the values.
 *
 *
 *
 */
//Example
// let firstName = 'Tochi';
// console.log(firstName);

/**
 * Rules in naming a variable
 * 1. Do not start with a number eg 12Age
 * 2. variable can contain  letter, numbers, underscore, or dollar sign
 * 3. It can contain all mentioned in 2
 * 4. Do not start the name of a variable in uppercase. This is a convention not a rule. However you can use it for a constant whose value can never change
 */

/**DATA TYPES: */
/**
 * Values in JavaScript are either primitive or Object
 */
// Primitive Data Types
//Number
/**
 * floating point numners. Used for decimal and integers
 */

//Strings
/**
 * Sequence of characters enclose in quotes. whether a single quotes, double quotes, or back ticks
 */

//Boolean
/**
 * logical type that can only be either TRUE or FALSE
 */
// example
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

//Null
/**An empty value */

//Undefined
/**A variable declared but no value was assigned to it */

//bigint
/**
 * large integer that are larger than number type
 */

//symbol
/**Value that is unique and cannot be changed */

/**
 * NOTE:
 * JAVASCRIPT has dynamic typing. This means that we do not have to manually define the data type of value stored in a variable
 */

// LET, CONST, AND VAR
// let age = 30;
// age = 31;

// console.log(age);

// const userName = 'cris123';
// console.log(userName);

// //VAR
// var menuItem = 'Lunch';
// console.log(menuItem);

// //BASIC OPERATORS
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// //concatenate
// const firstName = 'Tochi';
// const lastName = 'Nwagu';

// console.log(firstName + ' ' + lastName);

// const num = 10;
// num * 2; //20
// console.log(num);
// //modulo
// let answer = 12 % 10; //2
// console.log(answer);

// //Divide
// let nuNumber = 35 / 7; //5
// console.log(nuNumber);

// //Assignment Operators
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; //101
// x--; // 100
// x--; //99

// console.log(x);

// // Comparison
// // this returns either a truthy or falsy value
// console.log(ageJonas > ageSarah); //>, <, >=,<=
// console.log(ageSarah >= 18); //true

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018)

// OPERATOR PRECEDENCE
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; //x = y = 10

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(averageAge);

// Working with strings
// Example of a string
// const name = 'Tochi';
// const age = 25;
// const job = 'developer'

// //Concatenating strings
// const intro = 'Hello, my name is ' + name + ', a ' + age + ' years old ' + job + '.';

// console.log(intro);

// //Template literals
// const intro2 = `Hello, my name is ${name}, a ${age} years old ${job}.`;

// console.log(intro2)

//IF/Else Statements
// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log(`Sarah can start driving licence 🚗`);
// } else {
//   console.log(`Sarah is too young to drive. Wait another ${18 - age} years.`);
// }

//This is called controlled structure

//Type Conversion and Coercion
//Type Conversion
// let birthYear = '1991';
// // console.log(birthYear + 18) //199118
// // to convert
// console.log(Number(birthYear) + 18) //2009

// console.log(String(1991))
// console.log(typeof 1991)

//Type Coercion
// const about = 'I am ' + 23 + ' years old'
// console.log(about)
// console.log(typeof about)
// console.log('23' - '10' - 3); //10
// console.log('23' / 2) //11.5

// let n = '1' + 1; //'11'
// n = n - 1; // 10;
// console.log(n); //10
//This is called type coercion.
/**
 * In type coersion, JavaScript tries to convert the values to the same type so that the operation can be performed.
 * NOTE Type coercison can introduce bugs into your codes if not handled properly.
 */

//TRUTHY OR FALSY VALUES
/**
 * There are 5 falsy values: 0, '', undefined, null, NaN
 * This are not initial false, they only become falsy when they are converted to a Boolean value.
 * All other values are truthy.
 * The conversion to boolean is always implicit not explicit.
 * NOTE: This happens in 2 scenarios:
 * 1. When using a logical operators(&&, ||, ??)
 * 2. When using conditionals like if/else statements or for/while loops.
 */
// const money = 0;
// if (money) {
//   console.log(`Don't spend it all!`)
// } else {
//   console.log(`You should get a job!`)
// }
// let height = 0;
// if (height) {
//   console.log(`YAY! height is defined`)
// } else {
//   console.log(`Height is UNDEFINED`)
// }

//EQUALITY OPERATORS
// const age = 18;
// if (age === 18) console.log(`You just became an adult!`)