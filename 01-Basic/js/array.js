"use strict";
/**
 * Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list. Array objects can be stored in variables and dealt with in much the same way as any other type of value, the difference being that we can access each value inside the list individually, and do super useful and efficient things with the list, like loop through it and do the same thing to every value. Maybe we've got a series of product items and their prices stored in an array, and we want to loop through them all and print them out on an invoice, while totaling all the prices together and printing out the total price at the bottom.

If we didn't have arrays, we'd have to store every item in a separate variable, then call the code that does the printing and adding separately for each item. This would be much longer to write out, less efficient, and more error-prone. If we had 10 items to add to the invoice it would already be annoying, but what about 100 items, or 1000?
 */

//Arrays are used to store multiple values (list like) into one variable.

//EXAMPLE
const friends = ['Michael', 'Peter', 'Steven']
console.log(friends);

//find the firent element if an array.
console.log(friends[0]);
//NOTE Arrays are 0 (zero) based indexed items. this means we start counting from 0

//Find the length of an array
console.log(friends.length);

//We can get the last element in an array by 
console.log(friends[friends.length - 1]);

//We can replace an element in an array by simply 
friends[1] = 'Jay';
console.log(friends);
/**
 * Because Arrays are not primitive data, it can take in different data types such as strings, expressions, numbers, variables, and even arrays
 */
const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);