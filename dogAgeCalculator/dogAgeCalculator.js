/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/
// See everything Node receives

console.log(process.argv);

//  Get the dog's name
let dogName = process.argv[2];
console.log("Dog name:", dogName);

// Get the dog's age
let humanAge = Number(process.argv[3]);
console.log("Human age:", humanAge);

//  dog years at 0
let dogAge = 0;


//  Calculate dog years with if else if dog years are 1 its 15 human years

if (humanAge === 1) {
  dogAge = 15;
 // console.log("Age 1 is 15 dog Years =", dogAge);

//   if dog years are 2 human age its 24 dog age

} else if (humanAge === 2) {
  dogAge = 24;
 // console.log("Age 2 is 24 dog Years =", dogAge);

//   if dog age is over 2 human years, each year goes up by 5 in dog age

} else {
  dogAge = 24 + (humanAge - 2) * 5;
 // console.log("After 2 dogs age goes up by 5 years");
}
console.log("Your dog " + dogName + " is " + dogAge + " years old in dog years.");
