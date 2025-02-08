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

function mycake1(favour1) {
  this.myfavour1 = favour1;
}
var fav1 = new mycake1("Vanilla");
var fav2 = new mycake1("Chocolate");

if (fav1.myfavour1 === "Chocolate") {
  console.log("Cake must be Vanilla favour");
} else {
  console.log("Cake must be Chocolate favour");
}

// Syllogism - Method 3
