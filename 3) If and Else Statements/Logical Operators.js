/**
 * || OR Symbol (checks if either side is true then overall return true)
 * && AND Symbol (checks if both sides are true then overall return true)
 */

/**
 * OR LOGIC
 * 0 + 0 = 0
 * 1 + 0 = 1
 * 0 + 1 = 1
 * 1 + 1 = 1
 */

/**
 * AND LOGIC
 * 0 * 0 = 0
 * 1 * 0 = 0
 * 0 * 1 = 0
 * 1 * 1 = 1
 */



const bankAccountBalance = 127;
const costOfItem = 126;
const tax = 1;
const canSpendMoney = true
const hasCreditCard = true;
const creditLimit = 200
const hasReachedCreditLimit = false


if(bankAccountBalance >= costOfItem && canSpendMoney === true){
    console.log("Can purchase :)");
}

/**
 * Check if bank balance is greater then or equal to the costOfItem OR 
 * check if the credit card is enabled AND  creditLimit is greate then or equal to the cost of item
 */

if(bankAccountBalance >=costOfItem || hasCreditCard && creditLimit>= costOfItem){
    console.log("You got money");
}