var div = document.getElementById("div");
div.textContent = "Hello Everyone";

var newDiv = document.createElement("p");
newDiv.textContent = "My name is Thanos"

div.appendChild(newDiv);

// create a variable with an empty string to store the results
var string = "";

// a for loop is needed to cycle through seven times.
// variable string is used to store and get the # to show up after each cycle.
for(var i = 1; i < 8; i++){
    string += "#";
    console.log(string);
    var triangle = document.createElement("p");
    triangle.textContent = string;
    div.appendChild(triangle);
}

console.log("---------");

let str = "";
let num = 1;
while(num < 8){
    str += "#";
    num += 1;
    console.log(str)
}




