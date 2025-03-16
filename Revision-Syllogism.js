// Syllogism - Method 1

var cake1 = "vanilla";
var cake2 = "Chocolate";
var mycake = true;
if (mycake === true) {
  console.log("The cake is either Vanilla or Chocolate");
}
if (cake1 === "vanilla") {
  console.log("Cake must be Vanilla favour");
} else console.log("Cake must be Chocolate favour");

// Syllogism - Method 2
// function CakeConstructor(favour1) {
//   this.myFlavour = favour1;
// }
// var fav1 = new CakeConstructor("Vanilla");
// var fav2 = new CakeConstructor("Chocolate");

// if (fav1.myFlavour === "Chocolate") {
//   console.log("Cake must be Vanilla favour");
// } else {
//   console.log("Cake must be Chocolate favour");
// }

// // Huzaifa's Approach
/**
 * We have two cakes
 * The cake is either Vanilla or Chocolate
 * If its not Vanilla therefore its Chocolate
 */
// Console.log("");
function CakeConstructor(sweetness) {
  this.sweetness = sweetness;

  if (sweetness < 6) {
    this.type = "Vanilla";
  } else {
    this.type = "Chocolate";
  }
}
var cake1 = new CakeConstructor(7); // Chocolate
var cake2 = new CakeConstructor(4); // Vanilla
console.log(cake1);
console.log(cake2)
if(cake1.type !== "Chocolate"){
  console.log("The cake is Vanilla");
} else {
  console.log("The cake is Chocolate");
}
