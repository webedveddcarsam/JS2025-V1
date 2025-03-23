//exercise 1
let sayHi = (firstName, lastname) => {
  console.log("Good Morning", firstName + " " + lastname);
};
sayHi("Shaq", "Oneal");

//exercise 2
let numDoubler = (x) => {
  const dumbledNum = x * 2;
  return dumbledNum;
};
console.log(numDoubler(100));

//exercise 3
let myArray = [3, 5, 1, 8, 7];
let myArray1 = [3, 5, 1, 8, 7];
let myArray2 = [3, 5, 1, 8, 7];
let addToArray = (num, arrName) => {
  arrName.push(num);
  return myArray;
};
addToArray(10, myArray2);
addToArray(10, myArray1);
console.log(myArray);
console.log(myArray1);
console.log(myArray2);

//exercise 4
let sayGM = (firstName1, lastname1) =>
  console.log("Good Morning", firstName1 + " " + lastname1);

sayGM("Shaq", "Oneal");
