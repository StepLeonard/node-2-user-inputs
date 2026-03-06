/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/
// See everything Node receives

console.log(process.argv);

//  Get the dog's name
// process.argv[2] is the 3rd thing typed in the terminal
let dogName = process.argv[2];
console.log("Dog name:", dogName);

// Get the dog's age
// Convert it to a number so we can do math with it
let humanAge = Number(process.argv[3]);
console.log("Human age:", humanAge);

//  dog years at 0
let dogAge = 0;

// Check if the dog is 1 year old
// If it is, then the dog age equals 15 dog years

if (humanAge === 1) {
  dogAge = 15;
  // console.log("Age 1 is 15 dog Years =", dogAge);

  // Check if the dog is 2 years old
  // If it is, then the dog age equals 24 dog years
} else if (humanAge === 2) {
  dogAge = 24;
  // console.log("Age 2 is 24 dog Years =", dogAge);

  // If the dog is older than 2 human years
  // Each extra year adds 5 dog years
} else {
  dogAge = 24 + (humanAge - 2) * 5;
  // console.log("After 2 dogs age goes up by 5 years");
}
console.log(
  "Your dog " + dogName + " is " + dogAge + " years old in dog years.",
);
