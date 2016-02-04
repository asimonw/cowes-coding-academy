// easing
var x = 0, y = 0;
var difX = 0, difY = 0;
var easing = 0.02;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
	fill(0);

	difX = mouseX - x;
	difY = mouseY - y;
	x = x + difX * easing;
	y = y + difY * easing;
	ellipse(x, y, 20, 20);
}
