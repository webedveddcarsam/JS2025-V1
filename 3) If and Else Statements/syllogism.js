/**
 * Socrates is a man
 * All men are mortal
 * Therefore Socrates is a Mortal
 */

// // 1st approach
// var man1 = "Huzaifa"
// var man2 = "Socrates"
// var man3 = "Eddie"

// var allMenMortal = true

// if(allMenMortal === true){
//     console.log("All men are mortal");
//     if(man2 === "Socrates"){
//         console.log("Socrates found he is mortal");
//     }
// }

// // 2nd approach

// function MenConstructor(name, mortalityStatus ){
//     this.manName = name
//     this.status = mortalityStatus
//     this.sex = "Male"
// }

function MenConstructor(name) {
  this.manName = name;
  this.status = true;
  this.sex = "Male";
}
var man1 = new MenConstructor("Eddie");
var man2 = new MenConstructor("Socrates");
var man3 = new MenConstructor("Ali");

// man1.status = false;
console.log(man1);

// console.log(man1);
// console.log(man2);

if(man2.status === true){
    console.log("Man is mortal");
    console.log("Checking for name ....");

    if(man2.manName === "Socrates"){
        console.log("Socrates found");
    } else {
        console.log("Man is mortal but not Socrates");
    }
}

// // 3rd Approach

// var man1 = { manName: "Socrates", mortality: true };
// var man2 = { manName: "Huzaifa", mortality: true };
// var man3 = { manName: "Eddie", mortality: true };
// var alien = { manName: "Alien 51", mortality: false };

// if (man1.mortality === true) {
//   console.log("Man is mortal");
//   console.log("Checking name now....");

//   if (man1.manName === "Socrates") {
//     console.log("Socrates found");
//   } else {
//     console.log("Not Socrates");
//   }
// } else {
//   console.log("Not mortal");
// }

// // Homework **

/// // Search for Syllogisms on internet and try to resolve 2 of them with programming
/**
 * We have two cakes
 * The cake is either Vanilla or Chocolate
 * If its not Vanilla therefore its Chocolate
 */
