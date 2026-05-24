// let country = 'Nigeria';
// // // let continent = 'Africa';
// let population = 241000000


// // const isIsland = false;
// // let language;

// // console.log(country, population, isIsland, language);

// /**
//  * let, const and var
// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

// Try to change one of the changed variables now, and observe what happens.
//  */
// // language = "English";
// // const continent = "Africa"

// //reassigning a const will show squiggly red line under the reassigned variable

// // console.log(country, continent, population, isIsland, language);

// /**
//  * Basic Operators
// If your country split in half, and each half would contain half the population, then how many people would live in each half?

// Increase the population of your country by 1 and log the result to the console.

// Finland has a population of 6 million. Does your country have more people than Finland?

// The average population of a country is 33 million people. Does you country have less people than the average country?

// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
//  */
// // let nupopulation = 241 / 2
// // // console.log(nupopulation);
// // nupopulation++;
// // // console.log(nupopulation)
// // let popFinland = 6000000
// // const higherPopulation = population > popFinland
// // // console.log(higherPopulation)
// const avgPopulation = 33000000

// // const description = `${country} is in ${continent}, and its ${population} people speak ${language}.`
// // console.log(description)

// /**
//  * Taking Decisions: if / else Statements
// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
//  */
// // if (population > avgPopulation) {
// //   console.log(`${country}'s population is ${population - avgPopulation} above average`)
// // } else {
// //   console.log(`${country}'s population is ${avgPopulation - population} below average`)
// // }

// /**
//  * Type Conversion and Coercion
// Predict the result of these 5 operations without executing them:

// console.log('9' - '5'); // -> 4?
// console.log('19' - '13' + '17'); // -> 617?
// console.log('19' - '13' + 17); // -> 23?
// console.log('123' < 57); // -> false?
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143?
// Execute the operations to check if you were right.
//  */
// // console.log('9' - '5'); // -> 4?
// // console.log('19' - '13' + '17'); // -> 617?
// // console.log('19' - '13' + 17); // -> 23?
// // console.log('123' < 57); // -> false?
// // console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143?

// /**
//  * Equality Operators: == vs. ===
// Declare a variable numNeighbours based on a prompt input like this:

// prompt('How many neighbour countries does your contry have?');
// If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

// Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

// Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

// Test the code with different values of numNeighbours, including 1 and 0.

// Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

// Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

// Reflect on why we should use the === operator and type conversion in this situation.
//  */
// // const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));
// // if (numNeighbours === 1) {
// //   console.log("Only 1 border!")
// // } else if (numNeighbours > 1) {
// //   console.log('More than 1 border!')
// // } else {
// //   console.log('No borders!')
// // }
// /**
//  * Logical Operators
// Comment out the previous code so the prompt doesn't get in the way.

// Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.

// Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

// If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.

// Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).
//  */
// // if (language === 'English' && population < 50000000 && !isIsland) {
// //   console.log('You should live in Nigeria :)')
// // } else {
// //   console.log('Nigeria does not meet your criteria :(')
// // }

// /**
//  * The switch Statement
// Use a switch statement to log the following string for the given language:

// chinese or mandarin: 'MOST number of native speakers!';

// spanish: '2nd place in number of native speakers';

// english: '3rd place';

// hindi: 'Number 4';

// arabic: '5th most spoken language';

// for all other simply log 'Great language too :D'.
//  */
// // let spokenLanguage = prompt('What language do you speak?')
// // switch (spokenLanguage) {
// //   case 'chinese':
// //   case 'mandarin':
// //     console.log('MOST number of native speakers!');
// //     break;
// //   case 'spanish':
// //     console.log('2nd place in number of native speakers');
// //     break;
// //   case 'english':
// //     console.log('3rd Place');
// //     break;
// //   case 'hindu':
// //     console.log('Number 4');
// //     break;
// //   case 'arabic':
// //     console.log('5th most spoken language');
// //     break;
// //   default:
// //     console.log('Great language too :D');
// // }

// /**
//  * The Conditional (Ternary) Operator
// If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
//  */
// console.log(`${country}'s population is ${population >= avgPopulation ? 'above' : 'below'} average`);

/**
 * Functions﻿
Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.
 */

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

// console.log(describeCountry('Nigeria', 241, 'Abuja'));
// console.log(describeCountry('Finland', 33, 'Helsinki'));
// console.log(describeCountry('China', 430, 'Beijing'));

const describeNigeia = describeCountry('Nigeria', 241, 'Abuja');
const describeFinland = describeCountry('Finland', 33, 'Helsinki');
const describeChina = describeCountry('China', 1441, 'Beijing');
// console.log(describeNigeia);
// console.log(describeFinland);
// console.log(describeChina);

/**
 * Function Declarations vs. Expressions﻿
The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).
 */

function percentageOfWorld1(population) {
  return (population / 7500) * 100;
}

const percentagePopChina = percentageOfWorld1(1441);
const percentagePopFinland = percentageOfWorld1(33);
const percentagePopNigeria = percentageOfWorld1(241);
// console.log(percentagePopChina);
// console.log(percentagePopFinland);
// console.log(percentagePopNigeria);

//function expression
const percentageOfWolrd2 = function (population) {
  return (population / 7500) * 100;
}

const percentagePopChina2 = percentageOfWolrd2(1441);
const percentagePopFinland2 = percentageOfWolrd2(33);
const percentagePopNigeria2 = percentageOfWolrd2(241);
// console.log(percentagePopChina2);
// console.log(percentagePopFinland2);
// console.log(percentagePopNigeria2);

/**
 * Arrow Functions﻿
Recreate the last assignment, but this time create an arrow function called percentageOfWorld3
 */

const percentageOfWorld3 = population => population / 7500 * 100;
const percentagePopChina3 = percentageOfWorld3(1441)
// console.log(`The percentage of China population is ${percentagePopChina3}% of the world's population`);

/**
 * Functions Calling Other Functions﻿
Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

Call describePopulation with data for 3 countries of your choice.
 */

const describePopulation = function (country, population) {

  const percentage = percentageOfWorld1(population)

  return `${country} has ${population} million people, which is about ${percentage}% of the world.`
}

console.log(describePopulation('China', 1441));
console.log(describePopulation('USA', 332));
console.log(describePopulation('Nigeria', 241));