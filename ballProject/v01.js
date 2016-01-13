/*
	improvement of moving ball sketch
	goal: make 100 balls move
	version 1: refactor code into functions
*/

var x, y, speedX, speedY;

function setup() {
	createCanvas(windowWidth, windowHeight);

	x = 0;
	y = 0;
	speedX = 2;
	speedY = 3;
}

function draw() {
	background(255);
	move();
	bounce();
	display();
}

function move() {
	x = x + speedX;
	y = y + speedY;
}

function bounce() {
	if (x > width) {
		x = width;
		speedX = -1 * speedX;
	} else if (x < 0) {
		x = 0;
		speedX = -1 * speedX;
	}
	if (y > height || y < 0) {
		speedY = - speedY;
	}
}

function display() {
	fill(150, 0, 0);
	strokeWeight(10);
	stroke(0, 0, 150);
	ellipse(x, y, 50, 50);
	fill(0, 150, 0);
	noStroke();
	rect(x+10, y-20, 20, 50);
}
