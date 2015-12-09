// Randomness

var x = 0, y = 0,
		r = 0, g = 0, b = 0,
		s = 0, a = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {

	x = random(width);
	y = random(height);
	r = random(256);
	g = random(256);
	b = random(256);
	a = random(100);
	s = random(10, 50);

	noStroke();
	fill(r, g, b, a);
	rect(x, y, s, s);

	stroke(0);
	if (mouseIsPressed) {
		fill(0);
	} else {
		fill(255);
	}
	ellipse(mouseX, mouseY, 50, 50);
}

function keyPressed() {
	if (key == 'C') {
		background(255);
	}

}
