function player(name) {
  console.log("My favourite player is " + name);
}

player("Shaq Oneal");
player("Michael Jordan");

function fullname(firstName, lastName, number) {
  console.log(
    "My favourite player is " +
      firstName +
      " " +
      lastName +
      " on his number " +
      number
  );
}

fullname("Shaq", "Oneal", 32);
fullname("Michael", "Jordan", 23);
fullname("Pippen", "Scottie", 33);

function xxxnumber(x) {
  const result = x ** 2; // 2 ^ 2
  console.log(x + " is tripble number of " + result);
}
xxxnumber(3);

//squareAdd

function squareAdder(x, y) {
  const Sumup = x ** 2 + y;
  console.log("The square add of " + x + " and " + y + " is " + Sumup);
}

squareAdder(3, 4);
squareAdder(1, 5);
squareAdder(-10,10)


function powerUp(constant, exponent){
    const result = constant ** exponent;
    console.log(constant + " to the power of " + exponent + " is " + result);
}


powerUp(2,3);



let myArray = [1,3,5,7,9];
let myArray1 = [2,4,6,8,10];
let myArray2 = [3,6,9,12,15];


function addToArray(value, arrayname) {
  arrayname.push(value);
  console.log(arrayname);
  return arrayname;
}

addToArray(88, myArray)
addToArray(99, myArray1)
addToArray(77, myArray2)

function job(name, job, age, where){
    console.log("My name is " + name + ", I am a " + job + "and I am " + age + " years old. I work from " + where);
}

job("Eddie", "slave", 30, "Home");
job("Shaq", "Basketball player", 50, "Basketball Court");
job("Donald", "President", 60, "White House");

