/*
Creator: Shreyas Dethe

March 12, 2019

Inspired by : The Coding train - https://www.youtube.com/watch?v=Mm2eYfj0SgA

Reference : https://en.wikipedia.org/wiki/Fourier_series
*/

var n = 0;

var y_ = [];

var slider;

function setup() {
	createCanvas(windowWidth, windowHeight);
	slider = createSlider(1, 100, 1);
	
	canvas.parent('#canvas');
	slider.parent('#slider');
	order = createElement('p', slider.value());
	order.parent('#n');
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(2);
	noFill();

	translate(width/2 - 100, height/2);

	let x = 0;
	let y = 0;

	for(var i = 0; i < slider.value(); i++){

		let prevx = x;
		let prevy = y;

		let k = 2*i + 1;	
		let r = 100 * (4 / (k*PI));

		strokeWeight(4/k);
		ellipse(x, y, 2*r, 2*r);		//main circle

		x += r*cos(k*n);
		y += r*sin(k*n);

		strokeWeight(1);
		ellipse(x, y, 4);				//smaller dot

		strokeWeight(0.25);	
		line(prevx, prevy, x, y);		//radius line

	}

	strokeWeight(0.5);
	line(x, y, 250, y);				//guide line

	strokeWeight(1);

	y_.unshift(y);

	noFill();
	beginShape();
	for(var i = 0; i < y_.length; i++){
		vertex(250 + i, y_[i]);
	}
	endShape();

	if(y_.length > 250) y_.pop();
	
	order.html('Order ' + slider.value());

	n += 0.02;
}
