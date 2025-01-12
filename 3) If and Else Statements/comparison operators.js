/**
 * ==
 * ===
 * > greater then
 * >= greater then or equal to
 * 
 * < less then
 * <= less then or equal to
 * ! NOT sign
 * !== Not equal to
 */

const { config } = require("process");

// console.log(10 === "10"); // false
console.log(10 !== "10"); // true

const bankAccountBalance = 127;
const costOfItem = 126;
const tax = 1;


/**
 * Check if we can purchase the item
 */

// if (bankAccountBalance >= costOfItem){
//     console.log("you can purchase");
// }else{
//     console.log("Not enough money");
// }


if (bankAccountBalance >= costOfItem + tax){
    console.log("you can purchase");
}else{
    console.log("Not enough money");
}

console.log(bankAccountBalance);