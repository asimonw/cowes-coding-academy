// First p5.js program

// define variables
var x, y,  speedX = 3, speedY = 2;

// setup is called once at the start of the program
function setup() {
	createCanvas(windowWidth, windowHeight); // set width and height of drawing canvas
	x = width/2;
	y = height/2;
}

// draw is called 60 times per second (frameRate) by default
function draw() {
	var r = random(256);
	var g = random(256);
	var b = random(256);
	background(r, g, b); // arguments: RGB color values
	fill(150, 0, 0);
	strokeWeight(10);
	stroke(0, 0, 150);
	ellipse(x, y, 50, 50); // arguments: x, y, width, height
	x = x + speedX;
	y = y + speedY

	if (x > width || x < 0) {
		speedX = -1 * speedX;
	}
	if (y > height || y < 0) {
		speedY = - speedY;
	}
}
