// // simple form of function
// function sayHi(){
//     console.log("Hi");
// }

// sayHi()

// // // expression
// var sayHi = function(){
//     console.log("Say Hi");
// }

// sayHi()

// // arrow head function
var sayHi = () => {
  console.log("Hi");
};

sayHi();

// function sayStats(level, skill){
//     console.log("Level:", level, "skill:", skill);
// }

// sayStats("PRO", "BARBER")

var sayStats = (level, skill) => {
  console.log("Level:", level, "skill:", skill);
};

sayStats("PRO", "BARBER");

// return a square of a number using arrow head function

// let squarenum = (x) => {
//     console.log(x**2);
// }

/**
 *
 * Rules to optimize the arrow head function
 *
 * 1) If there is only 1 argument you can remove the round brackets ()
 *
 * 2) If there is only one return line in the function body then you can keep it on one line and also remove the curly braces
 */

// // after step 1
// let squarenum = x => {
//  console.log(x**2);
// }

// //  after step 2
let squarenum = (x) => console.log(x ** 2);

// squarenum(2);

let myArray = [3, 5, 7, 9, 10];

// // map() is an array only inbuilt function

myArray.map(function (num) {
  console.log(num);
});
