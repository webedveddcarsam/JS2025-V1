/**
 * SO to include real life objects we used the concept object
 *
 * JS object are made from name-value pair
 *
 * e.g var myObj = {name: "Chris"} // name is the key here and Chris is the value stored inside that key
 */

var myCarsObject = {
  1: "Civic",
  2: "Prius",
  3: "Land Cruiser",
  70: "Accord",
  fifthValue: "Audi A5",
};

console.log(myCarsObject);

// // accessing the values from an object

console.log(myCarsObject["1"]);

console.log(myCarsObject["fifthValue"]);

console.log(myCarsObject.fifthValue);
// console.log(myCarsObject.1); X Not ALLOWED

// updating a value
console.log(myCarsObject, "Before");

myCarsObject["3"] = "Hummer";

console.log(myCarsObject, "After");

var demoObject = {
  firstName: "Eddie",
  lastName: "Murphy",
  age: 30,
  country: "USA",
  address: {
    home: "123 Street",
    office: "456 Street",
  },
  phNo: {
    home: 1234,
    office: 5678,
  },
};

console.log(demoObject.phNo.office);

var pizza = {
  chicken: true,
  cheese: true,
  flavour: "FajitaPizza",
};

// 100 * 50 = 5000

// 1 * 50 = 50
// // Constructor Function

// function PizzaConstructor(toppings, cheese, flavour){
//     this.toppings = toppings;
//     this.fillings = cheese;
//     this.flavour = flavour
// }

function CarConstructor(Brand, Model, year) {
  this.carBrand = Brand;
  this.carModel = Model;
  this.carYear = year;

  this.sayHi = function(){
    console.log("Hi", this.carModel);
  }
}

var car1 = new CarConstructor("Toyota", "Supra MK4", 1998);
var car2 = new CarConstructor("Honda", "Accord", 2011);

// console.log(car1);
// console.log(car2);


// console.log(car1.carModel);

console.log(car1,car2);

car1.sayHi()
car2.sayHi()


/**
 * Hometask:
 * Make a laptop constructor
 * Each laptop constructed should have atleast 8 properties
 * 
 * make a showStats function in there e.g
 * laptop1.showStats() it should print al the 8 properties 
 */




