// fat squiggler
// by tony zito 10/9/21


function setup() {
	colorMode(RGB);
	canvasWidth = 800;
	canvasHeight = 800;
	curviness = 400;
	margin = 50;
	lineMode = false;
	createCanvas(canvasWidth, canvasHeight);
	background(randomColor());
	x = int(canvasWidth/2);
	y = int(canvasHeight/2);
	startingSize=60;
	maxFrames = random(15,75);
	sizeRandomness = .25;
	dirRandomness = 10;
	size = startingSize + startingSize * random(-sizeRandomness, sizeRandomness);
	// startColor = color(204,211,45);
	// endColor = color(12,53,233);
	startColor = randomColor();
	endColor = randomColor();
}

function draw() {
	print(size);
	//size = size + random(-sizeRandomness * size,sizeRandomness * size);
	strokeWeight(size);
	// strokeColor = startColor;
	stroke(lerpColor(startColor, endColor, frameCount/maxFrames));

	dx = x + random(-dirRandomness * size,dirRandomness * size);
	dy = y + random(-dirRandomness * size,dirRandomness * size);
	
	// keep in bounds
	if (dx < margin ) dx = abs(dx) + margin;
	if (dy < margin ) dy = abs(dy) + margin;
	if (dx > canvasWidth - margin) dx = canvasWidth - margin - random(0,5);
	if (dy > canvasWidth - margin) dy = canvasWidth - margin - random(0,5);
	if (lineMode) {
		line(x,y,dx,dy);
	} else {
		// curve(0,0,x,y,dx,dy,canvasWidth,canvasHeight);
		curve(x-curviness,y-curviness,x,y,dx,dy,dx+curviness,dy+curviness);		
	}
	x=dx;
	y=dy;
	
	if (frameCount > maxFrames) noLoop();
	// if (random() < .1) lineMode = ! lineMode;
	
}

function randomColor() {
	r = random(255); // r is a random number between 0 - 255
  g = random(255); // g is a random number betwen 100 - 200
  b = random(255); // b is a random number between 0 - 100
  a = random(200,255); // a is a random number between 200 - 255
	return color(r,g,b);
}

// function randomDest(size) {
// 	if (x > canvasWidth || x < 0)
// }