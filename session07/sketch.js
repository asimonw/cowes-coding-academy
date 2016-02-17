// vectors and shapes
var points = [];
var n = 20;
var angle;
var r = 200;
var globalOffset = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	angle = TWO_PI / n;
	for (var i = 0; i < n; i++) {
		points.push(createVector(0, 0));
	}
	points[n] = points[0];
	frameRate(60);
}

function draw() {
	background(255);

	translate(width/2, height/2);
	var offset = 0;
	for (var j = 0; j < n; j++) {
		points[j].set(cos(angle * j), sin(angle * j));
		points[j].mult(r * noise(offset, globalOffset));
		offset += 0.1;
	}
	globalOffset += 0.01;

	beginShape();
	curveVertex(points[n-1].x, points[n-1].y);
	for (var i = 0; i <= n; i++) {
		curveVertex(points[i].x, points[i].y);
	}
	curveVertex(points[1].x, points[1].y);
	endShape();
}
