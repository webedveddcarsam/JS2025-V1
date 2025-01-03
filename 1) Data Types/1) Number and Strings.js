/**
 * We are learning Es6, JS version released in 2015
 */

console.log("Hi Eddie, Welcome back");

console.log("10"); // String

console.log(10); // Number

// // typeof 

console.log(typeof "10");
console.log(typeof 10);

// JS can do Math for us

console.log(10 + 9);

/**
 * ()
 * D
 * M
 * A
 * S
 */

console.log(10 + (9 + 10 * 12 / 4 - 1));

// Modulus Operator %

console.log(10 % 3); // 1
console.log(10 % 4); // 2
// console.log(10 / 3);

// Math Object

// console.log(Math);

console.log(Math.random());

console.log(Math.floor(10.87)); // removes the decimal points

console.log(Math.round(10.87)); // rounds the number
console.log(Math.round(10.09)); // rounds the number

console.log(Math.PI);

// // generate a random number between 0 and 10

// console.log(Math.random() * 10);

// console.log(Math.floor(Math.random() * 10));


// // concatenation (joining of strings)

console.log(10 + "21");

// parseInt("str")

console.log(parseInt("21") + 10); // 31
console.log(parseInt("21abc") + 10); // 31
console.log(parseInt("a21c") + 10); // NaN (Not a Number)
console.log(parseInt("abc21") + 10); // NaN (Not a Number)

// isNaN() to check wether its not a number

console.log(isNaN("Eddie")); // true
console.log(isNaN(10)); // false

// strings and sequence of unicode characters
console.log("Hello Eddie".length);
console.log("Hello Eddie".charAt(4));
console.log("Hello Eddie".charAt(9));

