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
