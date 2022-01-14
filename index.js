// created a div to grab the element and added some text
var div = document.getElementById("div");

div.textContent = "Hello Everyone";

// created a new element and attached more text to the main empty element
var newDiv = document.createElement("p");
newDiv.textContent = "My name is Josh here is the triangle loop exercise"

div.appendChild(newDiv);

// create a variable with an empty string to store the results
var string = "";

// a for loop is needed to cycle through seven times.
// variable string is used to store and get the # to show up after each cycle.
// created a new element and attached the new element to the original empty element
// to display it in the DOM
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




