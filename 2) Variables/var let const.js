// var myFruit = "Apple";

// // myFruit = "Mangoe" // redeclaration
// var myFruit = "Mangoe" // reinitialization

// console.log(myFruit);

// // LET CASE

// let myFruit = "Apple";

// myFruit = "Mangoe" // redeclaration // ALLOWED
// // let myFruit = "Mangoe"; // reinitialization NOT ALLOWED

// console.log(myFruit);

// // CONST Case

const myFruit = "Apple";

// myFruit = "Mangoe" // redeclaration // NOT ALLOWED
// const myFruit = "Mangoe"; // reinitialization NOT ALLOWED

console.log(myFruit);

var isTrue = true;

if (isTrue === true) {
  console.log("Its runnng");
  const myFruit = "Cherry";

  console.log(myFruit);
}

function sayHi() {
  console.log("Hi");
  let myAge = 17;
  let canVote = true;
  if (myAge >= 18) {
    console.log("The person is eligible");
    let canVote = true
  } else {
    console.log("Person is not eligible");
    let canVote = false
    console.log(canVote);
  }
}

sayHi();


let count = 1

function increment(){
    // count = count + 1
    // count++
    count +=1
}

increment()
increment()
increment()
increment()
increment()

console.log(count);


/**
 * Make a let variable store in a variable
 * make a function to modify the name
 * run the function 
 * clg your name
 */

let myName = "Apple"

function nameChanger(){
    myName = "Eddie"
}
nameChanger()

console.log(myName);

/**
 * HW 
 * Research on Hoisting, how it is done in variables
 * Show me 3 practical exqamples of hoisting
 */