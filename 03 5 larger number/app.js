let num1 = +prompt("Enter number 1:");
let num2 = +prompt("Enter number 2:");
let num3 = +prompt("Enter number 3:");
let num4 = +prompt("Enter number 4:");
let num5 = +prompt("Enter number 5:");

let largestNum = num1;
if (num2 > largestNum) {
  largestNum = num2;
}
if (num3 > largestNum) {
  largestNum = num3;
}
if (num4 > largestNum) {
  largestNum = num4;
}
if (num5 > largestNum) {
  largestNum = num5;
}

// Display the largest num in the console
console.log("The largest number is: " + largestNum);