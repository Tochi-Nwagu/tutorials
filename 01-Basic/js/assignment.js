// let country = 'Nigeria';
// // let continent = 'Africa';
// let population = 241000000


// const isIsland = false;
// let language;

// console.log(country, population, isIsland, language);

/**
 * let, const and var
Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

Try to change one of the changed variables now, and observe what happens.
 */
// language = "English";
// const continent = "Africa"

//reassigning a const will show squiggly red line under the reassigned variable

// console.log(country, continent, population, isIsland, language);

/**
 * Basic Operators
If your country split in half, and each half would contain half the population, then how many people would live in each half?

Increase the population of your country by 1 and log the result to the console.

Finland has a population of 6 million. Does your country have more people than Finland?

The average population of a country is 33 million people. Does you country have less people than the average country?

Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
 */
// let nupopulation = 241 / 2
// // console.log(nupopulation);
// nupopulation++;
// // console.log(nupopulation)
// let popFinland = 6000000
// const higherPopulation = population > popFinland
// // console.log(higherPopulation)
// const avgPopulation = 33000000

// const description = `${country} is in ${continent}, and its ${population} people speak ${language}.`
// console.log(description)

/**
 * Taking Decisions: if / else Statements
If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
 */
// if (population > avgPopulation) {
//   console.log(`${country}'s population is ${population - avgPopulation} above average`)
// } else {
//   console.log(`${country}'s population is ${avgPopulation - population} below average`)
// }

/**
 * Type Conversion and Coercion
Predict the result of these 5 operations without executing them:

console.log('9' - '5'); // -> 4?
console.log('19' - '13' + '17'); // -> 617?
console.log('19' - '13' + 17); // -> 23?
console.log('123' < 57); // -> false?
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143?
Execute the operations to check if you were right.
 */
// console.log('9' - '5'); // -> 4?
// console.log('19' - '13' + '17'); // -> 617?
// console.log('19' - '13' + 17); // -> 23?
// console.log('123' < 57); // -> false?
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143?

/**
 * Equality Operators: == vs. ===
Declare a variable numNeighbours based on a prompt input like this:

prompt('How many neighbour countries does your contry have?');
If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

Test the code with different values of numNeighbours, including 1 and 0.

Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

Reflect on why we should use the === operator and type conversion in this situation.
 */
// const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));
// if (numNeighbours === 1) {
//   console.log("Only 1 border!")
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border!')
// } else {
//   console.log('No borders!')
// }
/**
 * Logical Operators
Comment out the previous code so the prompt doesn't get in the way.

Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.

Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.

Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).
 */
// if (language === 'English' && population < 50000000 && !isIsland) {
//   console.log('You should live in Nigeria :)')
// } else {
//   console.log('Nigeria does not meet your criteria :(')
// }

/**
 * The switch Statement
Use a switch statement to log the following string for the given language:

chinese or mandarin: 'MOST number of native speakers!';

spanish: '2nd place in number of native speakers';

english: '3rd place';

hindi: 'Number 4';

arabic: '5th most spoken language';

for all other simply log 'Great language too :D'.
 */
// let spokenLanguage = prompt('What language do you speak?')
// switch (spokenLanguage) {
//   case 'chinese':
//   case 'mandarin':
//     console.log('MOST number of native speakers!');
//     break;
//   case 'spanish':
//     console.log('2nd place in number of native speakers');
//     break;
//   case 'english':
//     console.log('3rd Place');
//     break;
//   case 'hindu':
//     console.log('Number 4');
//     break;
//   case 'arabic':
//     console.log('5th most spoken language');
//     break;
//   default:
//     console.log('Great language too :D');
// }