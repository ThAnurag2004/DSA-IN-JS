// Area and perimeter of rectangle

let length = 2;
let breadth = 3;

Area = length*breadth;

console.log("Area of rectangle: " + Area);

perimeter = 2*(length+breadth);

console.log("Perimeter of rectangle: " + perimeter);


// Generate OTP

let a =Math.floor(Math.random()*100000);

console.log(a);

// Area of triangle using Heron's Formula


let x = 5;
let y = 6;
let z = 7;

s = (x+y+z)/2;

Area = Math.trunc(Math.sqrt(s*(s-x)*(s-y)*(s-z)));

console.log(Area);


//Circumference of circle

let radius = 5;

circumference = 2*Math.PI*radius;

console.log(Math.trunc(circumference));