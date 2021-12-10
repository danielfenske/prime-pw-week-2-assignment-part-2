// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// A variable called 'name' is created and assigned the string 'Dane'.
// A conditional statement is used to determine when the variable 'name' is equal to 'Mary'.
// If 'name' is equal to 'Mary', the console will log: 'Hi, Mary!'. If 'name' does not equal 'Mary', the console will log: 'How do you do?'
// The current variable ('Dane') is not equal to 'Mary', so the console will log: 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// A variable called 'secret' is created. A variable called 'code' is also created and set equal to '123'.
// A conditional statement is created: if the variable 'code' is exactly '123', the variable 'secret'
// is assigned a string value of 'super' and 'code' is multipled by 2.
// Since 'code' is equal to 123, the conditional statement is run. 'Code' now equals 246.
// Another conditional statement is created: this time, it will only be run if the variable 'code' is greater than 250.
// Since 'code' is not greater than 250, the conditional statement will not run.
// The variable 'secret' is logged to the console, and the output is 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Three variables are defined. The first is named 'isStudent' with the boolean of true.
// The other two variables are named 'age' and 'zip', with their values being '34' and '55407'.

// A conditional if/else if statement is created: if 'isStudent' is true AND the 'zip' variable is less than 8,000,
// the console will log: 'You're a student on the West Coast!'.

// If this is not true, the condition will move to the next criteria: if 'isStudent' is false OR the age
// of the student is less than 30, the console will log: 'What are your hobbies?'

// If the first two conditions are not triggered, the conditional statement will move to the next block,
// which will run if isStudent is true, logging the message 'Welcome to Prime!' to the console.

// The final condition will only run if the first three conditions are not met. In this instance, the console
// will log the message: 'How about the weather?'

// Based on the value of each variable, the console will log the message: 'Welcome to prime!', because
// the variable 'age' is not less than 30, the variable 'zip' is not greater than 80000, and the variable 'isStudent'
// is true.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
