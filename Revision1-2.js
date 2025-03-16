// // // 1st step: we made the constructor to make objects for us
// function BMIConstructor(name, mass) {
//   this.personName = name;
//   this.bodyMass = mass;
// }

// let person1 = new BMIConstructor("Eddie", 22);
// let person2 = new BMIConstructor("Huzaifa", 23);
// let person3 = new BMIConstructor("Bob", 33);

// console.log(person1);

// // // 2nd step: Make a function to test the logic if the person is healthy or not

// function healthChecker(personObj) {
//   console.log(personObj.bodyMass);
//   if (personObj.bodyMass >= 18.5 && personObj.bodyMass <= 24.5) {
//     console.log("The person is health");
//   } else {
//     console.log("The person is unhealthy");
//   }
// }
// healthChecker(person1);

function TrafficConstructor(color, action) {
  this.light = color;
  this.myaction = action;
}

let light1 = new TrafficConstructor("RED", "STOP");
let light2 = new TrafficConstructor("Yellow", "Rush");
let light3 = new TrafficConstructor("Green", "Go");
console.log(light1);
console.log(light2);
console.log(light3);

function trafficChecker(signal) {
  if ((signal.color = "Green")) {
    console.log("GGGGOOO");
  } else {
    console.log("Rush");
  }
}

trafficChecker(light3);

function NBAConstrucor(team, state) {
  this.team = team;
  this.state = state;
}

let team1 = new NBAConstrucor("Lakers", "West");
let team2 = new NBAConstrucor("Clippers", "West");
let team3 = new NBAConstrucor("Boston", "East");
let team4 = new NBAConstrucor("Heat", "East");

function teamchecker(NBA) {
  if (NBA.team === "Lakers") {
    console.log("The team name is: ", NBA.team);
  } else {
    console.log("hello");
  }
}
teamchecker(team1);





// function calcxmas() {
//   today = new Date();
//   christmas = new Date("Dec 25, 2025");
//   msperDay = 1000 * 60 * 60 * 24;
//   diff = christmas.getTime() - today.getTime();
//   dayleft = Math.floor(diff/ msperDay);
//   return dayleft;
// }

// const daytillchristmas = calcxmas();
// console.log(daytillchristmas);
// // alert(daytillchristmas);
// console.log(daytillchristmas);
// document.write("There are only" + daytillchristmas + " days left till Christmas");

function orderPizza(){
return "Your pizza is on the way"

}

let food = orderPizza();

console.log(food);
