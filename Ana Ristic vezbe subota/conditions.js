"use strict";

// Write a program that compares two numbers and display the larger.
// Result should be displayed in the console.

var a = 1;
var b = 2;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

// Write a program to check if the number is divisible by 2.
// If it is, print even, if not, print odd.
// Sample numbers: 3, 4, 9 (check one at the time)
// Output: odd, even, odd

var a = 4;

if (a % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// Write a program to check if the number is divisible by 3 and 5.
// If it is, print that number.
// Sample numbers: 15, 12 (check one at the time)
// Output: 15

var a = 19;

if (a % 3 === 0 && a % 5 === 0) {
  console.log(a);
} else {
  console.log("the number is not divisible by 3 & 5");
}

// Write a conditional statement to find the sign of product of three numbers.
// Display the result in the console with the specified sign.
// Sample numbers: 3, -7, 2
// Output: The sign is -

var a = 3;
var b = -7;
var c = 2;
var result = a * b * c;

if (result > 0) {
  console.log(result + " the sign is +");
} else {
  console.log(result + " the sign is -");
}

// Write a program to check if the variable is a number.
// If it’s a number, check if it is divisible by 2.
// If it is, print the result, if not, show “X”
// Sample numbers: 10 | 7 (check one at the time)
// Output: 10 / 2 = 5 | X
var a = 8;

if (typeof a === "number" && a % 2 === 0) {
  console.log(a + " / 2 = " + a / 2);
} else {
  console.log("X");
}

// Write a conditional statement to find the largest of five numbers.
// Display the result in console.
// Sample numbers: -5, -2, -6, 0, -1
// Output: 0

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a > b && a > c && a > d && a > e) {
  console.log(a);
} else if (b > c && b > d && b > e) {
  console.log(b);
} else if (c > d && c > e) {
  console.log(b);
} else if (d > e) {
  console.log(d);
} else {
  console.log(e);
}

// Write a conditional statement to sort three numbers.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

var a = 0;
var b = -1;
var c = 4;
var tmp;
if (b > a) {
  tmp = a;
  a = b;
  b = tmp;
}
if (c > a) {
  tmp = a;
  a = c;
  c = tmp;
}
if (c > b) {
  tmp = b;
  b = c;
  c = tmp;
}
console.log(a + " " + b + " " + c);
