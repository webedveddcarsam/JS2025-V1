let price = 2;
function outcome() {
  price += 2;
}

outcome();
outcome();
outcome();

console.log(price);

//change var value

let car = "BYD";

function changeCar() {
  car = "Supra";
}

changeCar();
console.log(car);
/*
* = assignment operator
* == equality check while ignoring the data types
* === stickt equality check keeping in view the data types

*/

let age = 20;
let drivingtest = true;
if (age >= 19) {
  console.log("You can go to drining school");
} else {
  console.log("wait until 18");
}

const bankAccountBalance = 100;
const costOfItem = 126;
const tax = 0.85;
if (bankAccountBalance >= costOfItem) {
  console.log("You can buy it ");
  bbalance = (bankAccountBalance - costOfItem) * tax;
  console.log("You have " + bbalance + " dollors left ");
} else {
  console.log("Go home. you dont have enough money ");
  bbalance1 = (bankAccountBalance - costOfItem) * tax;
  console.log("You need " + Math.abs(bbalance1) + " dollors more ");
}
//

const mypocket = 300;
const cost = 150;
const canbuy = true;
const CreditCard = true;
const creditLimit = 200;
const anymoney = false;

if (mypocket >= cost && canbuy === true) {
  console.log("Can purchase :)");
} else {
  console.log("No money");
}
/**
 * Check if bank balance is greater then or equal to the costOfItem OR
 * check if the credit card is enabled AND  creditLimit is greate then or equal to the cost of item
 */

if (mypocket >= cost || (CreditCard && creditLimit >= costOfItem)) {
  console.log("You got money");
} else {
  console.log("go home an no money");
}
