let country = 'Nigeria';
// let continent = 'Africa';
let population = 241000000;


const isIsland = false;
let language;

console.log(country, population, isIsland, language);

/**
 * let, const and var﻿
Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

Try to change one of the changed variables now, and observe what happens.
 */
language = "English";
const continent = "Africa"

//reassigning a const will show squiggly red line under the reassigned variable

console.log(country, continent, population, isIsland, language);

/**
 * CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
 */
// SOLUTION
// const massMark = 78;
// const heightMark = 1.69;
// const massMark2 = 95;
// const heightMark2 = 1.88;

// const massJohn = 92;
// const heightJohn = 1.95;
// const massJohn2 = 85;
// const heightJohn2 = 1.76;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const BMIMark2 = massMark2 / (heightMark2 * heightMark2);
// const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, BMIMark2, BMIJohn2);
// console.log(markHigherBMI);


/**
 * Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.

👋 OPTIONAL: You can watch my solution in video format in the next lecture

IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
 */

// console.log("Mark" + "'s" + " BMI " + BMIMark + " is higher than John" + "'s!");
// console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)

