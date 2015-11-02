// part 1: strings

// define two variables and assign strings to them
var one = "Hello"; 
var two = " World";
// console.log(one, two);
// define a third variable which holds the concatenation of the two other strings
var three = one + two;
// write a function which does exactly this, accepts two strings and returns their concatenation
function concat(string1, string2) {
	var string3 = string1 + string2;
	console.log(string3);
}

concat(one, two);
// use this function to define another function which accepts a name and outputs "Hello name"

// Was it useful to define the concat function?


// part 2: numbers

// define variables x and y

// assign a number to both variables

// compute the square of both numbers, store the results in variables x2 and y2

// compute the square root of the sum of x2 and y2 and display it in the console

// you just computed the length of a line in the plane from (0,0) to (x,y)
// write a function length which does exactly this, 
// so that the previous operations can be captured by length(5, 6)


// part 3: p5.js

//write the following in a file

function setup() {
	ellipse(20, 20, 20, 20);
}

// go to the website p5js.org and figure out which function to call to draw a circle on the screen
// call that function in setup()
// can you make the circle move??
