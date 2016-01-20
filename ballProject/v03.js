/*
	improvement of moving ball sketch
	goal: make 100 balls move
	version 3: introduce arrays and looping
*/

var balls = [], numOfBalls = 100;

var gravity = 0.1;
// first component crudely models wind
var force = {
	x: random(-0.1, 0.1),
	y: gravity
};

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (var i = 0; i < numOfBalls; i++) {
		var ball = {
			x: random(width),
			y: random(100),
			speedX: random(-2, 2),
			speedY: 0
		};
		balls.push(ball);
	}
}

function draw() {
	background(255);

	for (var i = 0; i < numOfBalls; i++) {
		var ball = balls[i];
		applyForce(ball, force);
		move(ball);
		bounce(ball);
		display(ball);
	}
}
function mousePressed() {
	background(255);
}

// this should be generalized to allow for any kind of force (see later)
function applyForce(b, f) {
	b.speedY += f.y;
	b.speedX += f.x;
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
	if (b.y > height) {
		b.y = height;
		b.speedY = -1 * b.speedY;
	} else if (b.y < 0) {
		b.y = 0;
		b.speedY = -1 * b.speedY;
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
