/*
	improvement of moving ball sketch
	goal: make 100 balls move
	version 2: introduce objects
*/

var ball1 = {
	speedX: 2,
	speedY: 0
};

var gravity = 0.1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ball1.x = width/2;
	ball1.y = 50;
}

function draw() {
	// background(255);
	applyForce(ball1);
	move(ball1);
	bounce(ball1);
	display(ball1);
}
function mousePressed() {
	background(255);
}

// this should be generalized to allow for any kind of force (see later)
function applyForce(b) {
	b.speedY += gravity;
}

function move(b) {
	b.x += b.speedX;
	b.y = b.y + b.speedY;
}

function bounce(b) {
	if (b.x > width) {
		b.x = width;
		b.speedX = -1 * b.speedX;
	} else if (b.x < 0) {
		b.x = 0;
		b.speedX = -1 * b.speedX;
	}
	if (b.y > height || b.y < 0) {
		b.speedY = - b.speedY;
	}
}

function display(b) {
	fill(150, 0, 0);
	strokeWeight(10);
	stroke(0, 0, 150);
	ellipse(b.x, b.y, 50, 50);
	// fill(0, 150, 0);
	// noStroke();
	// rect(b.x+10, b.y-20, 20, 50);
}
