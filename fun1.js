// Exercise 1
const job = "driver";
function myjob() {
  console.log("I am ", job);
}
myjob();

//Exercise 2
function myjob2(role) {
  console.log("I am a", role);
}

myjob2("driver");
myjob2("teacher");
myjob2("programmer");

//Exercise 3
function namelist(firstName, lastName) {
  console.log("My name is", firstName, lastName);
}
namelist("Shaq", "Oneal");
namelist("Michael", "Jordon");

//Exercise 4
function calcnum(x) {
  const xxnum = x ** 3;
  console.log("The result is", xxnum);
  return xxnum;
}
calcnum(3);

//Exercise 5
function calcnum2(dobnum, num2) {
  const xxxnum1 = dobnum * 2;
  const xxxnum2 = num2 * 3;
  const ttl = xxxnum1 + xxxnum2;
  console.log("Totol is", ttl);
}
calcnum2(2, 3);
calcnum2(4, 6);

//Exercise 6

let myArray = [1, 3, 5, 7, 9];
let myArray1 = [2, 4, 6, 8, 10];
let myArray2 = [3, 6, 9, 12, 15];

function addToArray1(num4, arrayname) {
  arrayname.push(num4);

  return myArray;
}

addToArray1(13, myArray);
addToArray1(12, myArray1);
addToArray1(18, myArray2);

console.log(myArray);
console.log(myArray1);
console.log(myArray2);

//Exercise 8
let myobj1 = {
  drink: "Coca Cola ",
  sweet: "yes",
};
let myobj2 = {
  drink: "Diet Cola ",
  sweet: "no",
};

function mydrink(brand, mysweet) {
  brand["drink"] = mysweet;
  return brand;
}
console.log(mydrink(myobj1, "cry"));
console.log(mydrink(myobj2, "sad"));

let mynameA = {
  first: "Michael",
  last: "Jordan",
};
let mynameB = {
  first: "Shaq",
  last: "Oneal",
};

function changesurname(firstN, lastN) {
  lastN["last"] = firstN;
  return lastN;
}
console.log(changesurname("Lee", mynameB));

function sqandmult(sum1, sum2) {
  let mainnum = "First function";

  function sq(sum1) {
    let secnum = "Second function";
    console.log(secnum);
    return sum1 * sum1;
  }

  function multer(sum2) {
    return sum2 * 20;
  }
  return sq(sum1) + multer(sum2);
}
console.log(sqandmult(2, 10));


