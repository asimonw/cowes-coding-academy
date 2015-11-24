// First p5.js program

// define variables
var x;

// setup is called once at the start of the program
function setup() {
	createCanvas(200, 200); // set width and height of drawing canvas
	x = width/2;
}

// draw is called 60 times per second (frameRate) by default
function draw() {
	background(150, 0, 0); // arguments: RGB color values
	ellipse(x, 50, 50, 50); // arguments: x, y, width, height
	x = x + 1;

	if (x > width) {
		x = 0;
	}
}