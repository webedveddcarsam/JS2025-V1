/** string & number */
console.log(32);
console.log("32");
console.log(typeof 32);
console.log(typeof "32");

/* math calacuation 
() , D , M, A, S 
*/

console.log(21 + ((25 * 3) / 6 + 9));
console.log(6 + (16 + 4 / 2 + 8));

// Modulus operator

console.log(10 % 2); //result of divison of reminder //
console.log(10 % 3);

// math
console.log(Math.random()); //show random number from 0 to 1)
console.log(Math.random() * 20); //show random number from 0 to 20)
console.log(Math.floor(63.564645)); //remove all decimal numbers
console.log(Math.round(12.5641)); //show round up number )

console.log(Math.floor(Math.random() * 10));

//conctenation combine string and number

console.log(32 + " Shaq");

//parseInt("Str")
console.log(parseInt("22") + 10);
console.log(parseInt("22shaq") + 10);

console.log(parseInt("S21haq") + 10); //NaN
console.log(parseInt("Shaq21") + 10); //NaN

//isNaN  check it is a number
console.log(isNaN('a'))
// console.log(isNaN(32)); //false
// console.log(isNaN(10));
//strings and squence of unicode character
console.log("Shaq is basketball player".length);
console.log("Shaq is basketball player".charAt(0));

/* Booleans 
0 is false
1 is true
*/
// below is true //
var iscorrect = true;
var isOne = 1;
var nonEmpty = "word";

//below is false//
var iswrong = false;
var iszero = 0;
var emptystring = "";
var isNaN = NaN;
var isundefined = undefined;
var nonassisgned;

// Array

var MyArray = [32, 10, "Coke", "Swim"];
console.log(MyArray[2]);
console.log(MyArray.length);
