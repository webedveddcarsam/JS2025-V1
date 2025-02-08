var myCarsObject = {
  1: "Civic",
  2: "Prius",
  3: "Land Cruiser",
  70: "Accord",
  fifthValue: "Audi A5",
};

//console.log(myCarsObject);

// // accessing the values from an object

console.log(myCarsObject["1"]);
console.log(myCarsObject["fifthValue"]);
console.log(myCarsObject.fifthValue);
console.log(myCarsObject, "Before");
myCarsObject["3"] = "Hummer";
console.log(myCarsObject, "After");

const language = ["Python", "Javascript", "Java", "C", "Rudy"];
const mylanag = language.slice(1, -2);
console.log(mylanag);

const language2 = ["Python", "Javascript", "Java", "C", "Rudy"];
language2.splice(1, 0, "C++");
console.log(language2);
language2.splice(1, 1);
console.log(language2);

let myname = "Superman";

function changeName() {
  myname = "Batman";
}
changeName();
console.log(myname);

//// Practice 2 approach -  syllogism /////
function amAvailable(nickname, status) {
  this.myname = nickname;
  this.mystatus = status;
}

var menA = new amAvailable("Peter", "yes");
var menB = new amAvailable("John", "no");

// console.log(menA);
// console.log(menB);

if (menA.mystatus === "yes") {
  console.log("He is Single");
}
if (menB.mystatus === "yes") {
  console.log("He is Sigle");
} else {
  console.log("He married");
}
//// Practice 1 approach -syllogism /////
var drink1 = "CocaCola";
var drink2 = "Solo";
var drink3 = "Orange";

var alldrink = true;

if (alldrink === true) {
  console.log("My favourite drink");
  if (drink1 === "CocaCola") {
    console.log("I will drink everyday");
  }
}
//// Practice 2 approach -syllogism /////

function newcar(brand, model) {
  this.mybrand = brand;
  this.mymodel = model;
}
var car1 = new newcar("toyota", "supra");
var car2 = new newcar("toyota", "86");
console.log(car1);

if (car2.mybrand === "toyota") {
  console.log("My favourite brand");
} else {
  console.log("I am not interest");
}

if (car1.mybrand === "toyota" && car2.mybrand === "toyota") {
  console.log("That is good brand");
} else {
  console.log("i am not interested");
}

if (car2.mymodel === "86") {
  console.log("I prefer Supra more than 86");
} else {
  console.log("My Dream Car");
}
