const { response } = require("express");

console.log("User name logic");


// // For Internet Explorer Logic
// try {
//   var network = new ActiveXObject("WScript.Network");
//   console.log(network, "network");

//   document.getElementById(
//     ("wiindowUserName".innerText = "Hello " + network.userName)
//   );
// } catch (error) {
//   document.getElementById("wiindowUserName").innerHTML = error;
// }



fetch("http://localhost:3000/username")
.then(response => response.json())
.then(data => {
    document.getElementById("wiindowUserName").innerText = "Hello" + data.username
})