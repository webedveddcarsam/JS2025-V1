/**
 * When we place a function inside
 *
 * Nested functions form closure and closure is an expression that binds/mix the free variables
 *
 * VIMP: The inner variables of nested functions have the access to the variables of the main functions in which they are nested but not vice versa
 *
 *
 *
 */

function squareAndMultiply(num1, num2) {
  let MainFunctionVar = "coming from squareAndMultiply";

  function squarer(num1) {
    // console.log(MainFunctionVar); // runs fine

    let squarerVar = "I am coming from squarer";
    console.log(squarerVar);
    return num1 * num1;
  }

  function multiplier(num2) {
    // console.log(MainFunctionVar); // runs fine
    return num2 * 10;
  }
  // console.log(squarerVar); // won't run

  return squarer(num1) + multiplier(num2);
}

console.log(squareAndMultiply(2, 10)); //  4 + 100 = 104

/**
 * make a function personFormatter which has 3 arguments, firstName, lastName and age
 *
 * In that function make two nested functions:
 * 1) NameFormatter, which formats first and last name
 * 2) ageFormatter, which takes the first and last name from the previous function and formats age with it as well
 */

function namedetails(firstName, lastName, age) {
  function fullname(firstName, lastName) {
    // console.log(firstName + lastName);
    return firstName + lastName;
  }

  function birth(age) {
    // console.log("My age" + age);
    return age;
  }

  return fullname(firstName, lastName) + birth(age);
}

console.log(namedetails("shaq ", "oneal ", 50));
