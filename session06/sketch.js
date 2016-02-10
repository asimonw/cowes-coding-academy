// fractal trees
// using: coordinate transforms and recursion

var l = 200;
var angle;
var ratio = 2/3;

function setup() {
	createCanvas(windowWidth, windowHeight);
	angle = radians(30);
}

function draw() {
	background(255);
	l = map(mouseY, 0, height, height/3, 10);
	angle = radians(map(mouseX, 0, width, 0, 360));
	// translate to root of tree
	translate(width/2, height);

	// draw tree
	tree(l);
}

function tree(l) {
	line(0, 0, 0, -l);

	branch(l);
}

function branch(l) {
	// make sure the recursion stops at some point, or you'll end up with an infinite loop
	if (l > 2) {
		push();
		translate(0, -l);
		rotate(angle);
		line(0, 0, 0, - ratio * l);
		// make recursive call to continue drawing branches
		branch(ratio * l);
		rotate(- 2 * angle);
		line(0, 0, 0, - ratio * l);
		// another recursive call for the symmetric set of branches
		branch(ratio * l);
		pop();
	}
}
