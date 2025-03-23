//Excersie 1//
function fname(firstName, lastName) {
  // console.log(firstName,lastName);
  function character(chara) {
    console.log(firstName + " " + lastName + " is " + chara);
  }
  character("smart");
}
fname("Eddie", "Lee");
fname("Huzaifa", "Sheikh");

//Excersie 2//
function nameLogger(firstName, lastName, char, handsome) {
  // console.log(firstName,lastName);

  function character() {
    if (handsome === "yes") {
      console.log(firstName + " " + lastName + " is " + char);
    } else {
      console.log(firstName + " " + lastName + " is not " + char);
    }
   
  }

 
  character()

}

console.log("Test");
nameLogger("Eddie", "lee", "Positive", "yes")
nameLogger("Brandon", "Chen", "Positive", "no")

//Excercise 3

function counter() {
  let count = 1;

  return function increase() {
    count++;
    console.log(`Count: ${count}`);
  };
}

const myCounter = counter();
myCounter();
myCounter();
myCounter();
myCounter();
myCounter();

//Exercise 4
function feeling() {
  console.log("I am tired");

  function mood() {
    console.log("I am bad mood ");
  }
  mood();
}

feeling();
