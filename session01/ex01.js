// part 1: strings

// define two variables and assign strings to them
var one = "Hello"; 
var two = " World";

// define a third variable which holds the concatenation of the two other strings
var three = one + two;

// write a function which does exactly this, accepts two strings and returns their concatenation
function concat(jack, amy) {
	var string3 = jack + amy;
	return string3;
}
console.log(concat(one, two));

// use this function to define another function which accepts a name and outputs "Hello name"
function greet(name) {
	return concat("Hello ", name);
}
console.log(greet("Alex"));

// Was it useful to define the concat function?
// no, + already does the job just fine.

// part 2: numbers

// define variables x and y

// assign a number to both variables

// compute the square of both numbers, store the results in variables x2 and y2

// compute the square root of the sum of x2 and y2 and display it in the console

// you just computed the length of a line in the plane from (0,0) to (x,y)
// write a function length which does exactly this, 
// so that the previous operations can be captured by length(5, 6)
