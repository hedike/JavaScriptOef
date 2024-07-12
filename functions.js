// function greeting(){
//     alert("Hello World");
// }

// greeting();

// let announcement = function(){
//     alert("This is the second way of using functions");
// }

// announcement();

// let cubeThis = function(someNumber){
//     document.getElementById("output").innerHTML = someNumber * someNumber * someNumber;
// }

// let x = prompt("Geef getal?");

// cubeThis(x);

// let rectangleArea = function(length, width){
//     let area = length * width;
//     return area;
// }

// newest way to define functions: use arrow (=>) functions
let rectangleArea = (length, width) => length * width;

let length = prompt("Length?");
let width = prompt("Width?");

document.getElementById("output").innerHTML = rectangleArea(length, width);