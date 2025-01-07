var challengeArray = [
  1,
  22,
  2,
  true,
  "Eddie",
  "Huzaifa",
  "Shaun",
  [1, 2],
  { 1: "Chris" },
];
console.log("");
var chall1 = challengeArray.slice(2);
console.log(challengeArray);

var chall1 = challengeArray.reverse();
chall1.pop();
console.log(chall1);
chall1.pop();
console.log(chall1);
chall1.push(1);
console.log(chall1);
console.log(challengeArray);

/**
 * Research on slice vs splice in JS
 *
 * https://www.geeksforgeeks.org/what-is-the-difference-between-array-slice-and-array-splice-in-javascript/
 * 

slice 
- Do not reflect original array value 
- it show value change of new array value . 
- when you print array . it will show orginaial 
eg
**/
var arrnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(arrnum.slice(4)); //it show result of array with out moodify
console.log(arrnum);


/*splice 
-it modify original array
-reult will save as new array value
- splice can add single and remove specific value on any array index  
below is sample of splice 

*/

var challengeArray2 = [
    1,
    22,
    2,
    true,
    "Eddie",
    "Huzaifa",
    "Shaun",
    [1, 2],
    { 1: "Chris" },
  ];


console.log(challengeArray2.splice(1, 1));
console.log(challengeArray2);


