// Let's make a tip calculator with Node.js!

// Run this file with the node command:
// node tipCalculator.js

let bill = Number(process.argv[2]);
let tipPercentage = Number(process.argv[3]);
let numGuests = Number(process.argv[4]);

console.log(process.argv[2]);

// calculate tip
let tipAmount = bill * tipPercentage;
console.log("tipAmount", tipAmount)

// calculate total bill
let totalBill = bill + tipAmount;
 console.log("total Bill", totalBill)

// calculate total for each guest
let amountOwedPerGuest = totalBill / numGuests;
console.log("amountOwedPerGuest", amountOwedPerGuest)