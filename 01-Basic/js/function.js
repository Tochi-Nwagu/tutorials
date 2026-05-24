'use strict';
//Strict mode helps us detect why javascript is failing otherwise it just fails silently
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio' // this will not work because use strict mode actually has it as a javascript reserved word that might be used in the future

//FUNCTIONS
// function logger() {
//   console.log('My name is Tochi');
// };

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   // console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`
//   return juice
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const applesOrangeJuice = fruitProcessor(5, 3);
// console.log(applesOrangeJuice);

//FUNCTION DECLARATION VS. FUNCTION EXPRESSION

//FUNCTION DECLARATION
function calAge1(birthYear) {
  return 2037 - birthYear;
}

const age = calAge1(1991)
// console.log(age);

//FUNCTION EXPRESSION
//This is a function without a name or may be referred anonymous functions
// const calAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }
// const age2 = calAge2(1991)
// console.log(age2);

//ARROW FUNCTION
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991)
// console.log(age3);


const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}
// console.log(yearUntilRetirement(1991, "Jonas"));
// console.log(yearUntilRetirement(1981, "Bob"));

//NOTE Arrow functions does not get the "this" keyword

//FUNCTIONS CALLING FUNCTIONS
const cutPieces = function (fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

// console.log(fruitProcessor(2, 3)); 