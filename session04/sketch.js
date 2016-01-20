// introducing loops

function setup() {

	createCanvas(windowWidth, windowHeight);
	stroke(150);
	strokeWeight(10);

	// var x = 50;
	// while (x < width) {
	// 	line(x, 50, x, 100);
	// 	x += 50;
	// }

	// equivalent for loop
	for (var x = 50; x < width; x += 50) {
		line(x, 50, x, 100);
	}

	var r = 50;

	fill(150, 15);
	noStroke();
	while (r < 300) {
		ellipse(width/2, height/2, r, r);
		r += 10;
	}

	fill(150, 0, 0, 50);
	rect(200, 200, 80, 80);
	fill(0, 0, 150, 50);
	rect(240, 240, 80, 80);
}

function draw() {

}
