// type coercion

console.log("1"+1); //here only concatination of string and 1 will occur
console.log("1"-1); // here actual operation will perform
console.log("1"*1); // here actual operation will perform
console.log("1"/1); // here actual operation will perform

let m = 10;
let n = 10;

c = m+n;

console.log(c);


//swap two variable without using third variable

let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log("Swaped Number");

console.log(a,b);


// use of math.floor

x = 112
y = 20

console.log("Before math.floor operation");

console.log(x/y);

console.log("After math.floor operation");

console.log(Math.floor(x/y));


//magic code

let e = true;

e++;

console.log(e);

//tricky question


let w = 10;

let q = ++(w++);

console.log(q);


// Math function

// --Math.round()
// --Math.ceil()
// --Math.floor()
// --Math.trunc() // remove the decimal part
// --Math.pow()
// --Math.sqrt()
// --Math.cbrt()
// --Math.abs()
// --Math.max()
// --Math.min()
// --Math.random()
// --toFixed()
// --Math.PI()