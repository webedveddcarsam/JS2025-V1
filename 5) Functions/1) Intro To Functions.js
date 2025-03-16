/**
 * Function:
 * A function is a JS procedure - a set of statements that performs a task or calculates a value
 *
 * HT: Research more on Mozilla Developer Network about functions
 */

// const myName = "Eddie"
// function sayHi(){
//     console.log("Hi ", myName);
// }

// // call back
// sayHi()

// // a better way (a function with an argument)
// function sayHi(firstName) {
//   console.log("Hi", firstName);
// }

// sayHi("Eddie");
// sayHi("Huzaifa");
// sayHi(7);
// sayHi(true);

function sayHi(firstName, Surname) {
  console.log("Hi", firstName, Surname);
}
sayHi("Michael", "Jordan");
sayHi("Shaq", "Oneal");

// make a function that takes a number and doubles it

function numDoubler(x) {
  //   console.log(x * 2);
  const doubledNum = x * 2;
  return doubledNum;
}

// console.log(numDoubler(100));

function doubledPlusNum(doubledNum, num) {
  return doubledNum + num;
}

console.log(doubledPlusNum(numDoubler(3), 10)); // 6 + 10 = 16

// make a function it takes a number and returns square of that

function numsquare(x) {
  const squarenum = x ** 2;
  return squarenum;
}

console.log(numsquare(7));

function squarer(x) {
  return x ** 2;
}

console.log(squarer(7));

/**
 * make a squaredNum function which takes a number and returns square
 *
 * Make another function squareAdder it takes the input from the previous one adds it
 * formats it in an object and returns it
 *
 *
 * sample:
 * squareAdder(5, 10) // 25 + 10 = 35
 */

function squareNum(W) {
  return W ** 2;
}

console.table(squareNum(8));

function squareAdder(squareNum, price) {
  const ansObj = {
    answer: squareNum + price,
  };

  return ansObj;
}

console.log(squareAdder(squareNum(8), 20));

let myArray = [3, 5, 1, 8, 7];
let myArray1 = [3, 5, 1, 8, 7];
let myArray2 = [3, 5, 1, 8, 7];

function addToArray(num, arrName) {
  arrName.push(num);

  return myArray;
}

addToArray(10, myArray2);
addToArray(10, myArray1);

console.log(myArray);
console.log(myArray1);
console.log(myArray2);

let myObj = {
  name: "Chris",
  age: 20,
};
let myObj2 = {
  name: "Polina",
  age: 25,
};

// function profie(objName, ageNum) {
//   objName["age"] = ageNum;

//   return objName;
// }

// console.log(profie(myObj, 32));
// console.log(profie(myObj2, 26));

function profile2(objName2, Name1) {
  objName2["name"] = Name1;
  return objName2;
}
console.log(profile2("Shaq", myObj));
console.log(profile2("Eddie", myObj2));

console.log(profile2(myObj, "Shaq"));
console.log(profile2(myObj2, "Eddie"));

function profile3(objName, title, ageNum) {
  objName["name"] = title;
  objName["age"] = ageNum;
  return objName;
}

console.log(profile3(myObj, "Peter"));
console.log(profile3(myObj2, "will", 10));

let myNumObj = {
  num1: 1,
};
let myNumObj2 = {
  num1: 10,
};

function numChanger(eddie, num) {
  eddie["num1"] = num;
  // console.log(eddie);
  return eddie;
}

console.log(numChanger(myNumObj, 100));
console.log(numChanger(myNumObj2, 50));
// numChanger(myNumObj, 100)

// let myDataArray = [1, 2, 3, "Sabina", "Leyla", 4, 5, 6];

// for (var i = 0; i <= 7; i++) {
//   // console.log(i);
//   // console.log("Eddie is great", i);

//   // console.log(myDataArray[i]);

//   if (myDataArray[i] == "Sabina") {
//     console.log("Person found");
//   } else {
//     console.log("Person not found");
//   }
// }
