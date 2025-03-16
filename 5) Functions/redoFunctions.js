// function sayName() {
//   console.log("Eddie");
// }


// sayName();


// function sayName(name){
//     console.log("Hi", name);
// }



// sayName("Eddie");



function sayName(firstName, lastName, age){
    console.log("Hi", firstName, lastName , " I am " + age + " years old");
}



sayName("Eddie", "P.", 32);

function dNum(x){
    const ddnum = x * 2;
    // console.log(ddnum);
    return ddnum;
}
console.log(dNum(22));
// dNum(22);


// // make a function which takes a string and adds  super at the end of it, e.g stringAdder("Eddie")   // EddieSuper

function stringAdder(name){
 const addName = name + "Dumper";
 return addName
}

// let Eddie = "Hulk"

console.log(stringAdder("Eddie"));


