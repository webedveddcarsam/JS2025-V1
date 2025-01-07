/**
 * ARRAYS
 * Collection of data
 *
 * We can store any data type in arrays
 */

var myArray = [1, 2, "Eddie", true, false, { 1: "Chris" }, [1, 2]];

console.log(myArray);
console.log(myArray.length);
console.log(myArray[2]);
var myName = myArray[2];
console.log(myName);
myArray[0] = 100; // updating a value
console.log(myArray);

/**
 * Array inbuilt functions
 *
 * push(element) adds the element at the last index of the array
 * pop() deletes the last index of the array
 * concat() join two or more arrays together
 * join() extracts the elements of the array in the form of string
 * reverse() flips the array
 * slice()
 * splice()
 */

var myCars1 = ["Supra", "GTR", "Prius", "Mira"];
var myCars2 = ["Celic"];
var myCars3 = ["Tesla"];
var myName = "eddie";

myCars1.push("Skyline");

myCars1.pop();

// myName.push() // X

console.log(myCars1);

var allCars = myCars1.concat(myCars2, myCars3);

console.log(allCars);

// var carsJoined = allCars.join("-_-");
// console.log(carsJoined);
// var flippedArray = allCars.reverse();
// console.log(flippedArray);
// var slicedArray = allCars.slice(2);
// var slicedArray = allCars.slice(2, 4);
var slicedArray = allCars.slice(1, 6);

console.log(slicedArray);

var challengeArray = [
  1,
  22,
  2,
  true,
  "Eddie",
  "Huzaifa",
  "Shaun",
  [1, 2],
  { 1: "Chris" },
];
console.log("");

var chall1 = challengeArray.slice(2);
console.log(chall1);

/**
 * Research on slice vs splice in JS
 *
 * https://www.geeksforgeeks.org/what-is-the-difference-between-array-slice-and-array-splice-in-javascript/
 */
