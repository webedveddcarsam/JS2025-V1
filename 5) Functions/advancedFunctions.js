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

let mynameB = {
  first: "Shaq",
  last: "Oneal",
};
// function nameChanger(objName, key, value) {
//   return (objName[key] = value);
// }
// nameChanger(mynameB, "last", "Lee");

// let nameChanger = (objName, key, value) => {
//   return (objName[key] = value);
// };

// nameChanger(mynameB, "last", "Lee");
// console.log(mynameB);

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

let nameChanger = (objName, key, value) => {
  return (objName[key] = value);
};

let nameChanger1 = (objName, key, value) => (objName[key] = value);
// console.log(nameChanger() "last", "Lee"););

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

let myArray = [3, 5, 7, 9, 10, 11, 14, 66, 99];

// // map() is an array only inbuilt function

// myArray.map(function (num) {
//   console.log(num);
// });

// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);

// myArray.map(function (num) {
//   console.log(num + 10);
// });

/// // Map on array myArray return square of each number
// myArray.map(function (num1) {
//   console.log(num1 ** 2);
// });

const myUsers = [
  // its an array of objects
  { id: 1, userName: "Eddie" },
  { id: 2, userName: "Huzaifa" },
  { id: 3, userName: "Ali" },
  { id: 4, userName: "Polina" },
];
const myUsers2 = [
  // its an array of objects
  { id: 1, userName: "John" },
  { id: 2, userName: "Sara" },
  { id: 3, userName: "Jack" },
  { id: 4, userName: "Polo" },
];

// let myNames = myUsers.map(function (obj) {
//   // console.log(obj);
//   // console.log(obj.userName);
//   return obj.userName;
// });

// console.log(myNames);

// let myid = myUsers.map(function (obj) {
//   console.log(obj.id);
//   return obj.id;
// });
// console.log(myid);

// function arrayMapper(arrName, key){
//   let myData = arrName.map(function(obj){
//     return obj[key]
//   })

//   return myData
// }

// var sayHi = () => {
//   console.log("Hi");
// };

let arrayMapper = (arrName, key) => arrName.map((obj) => obj[key]);


console.log(arrayMapper(myUsers2, "id"));

// // filter

const myNums = [3, 4, 7, 11, 6, 3, 9];

const myFiltererList = myNums.filter(function (num) {
  return num > 5;
});

console.log(myFiltererList);
