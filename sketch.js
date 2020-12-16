var diam1=0;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,216,230); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,75,75); // center of canvas, 20px dia
  fill(300,175,diam1,diam1); //pink color for square
  rect(diam1,diam1,diam1,diam1); //square
  
}

function mousePressed(){
	diam1=diam1 + 5;
}