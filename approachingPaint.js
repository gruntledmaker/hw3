function setup() {
  createCanvas(800, 800);
  frameRate(24);
  background(255, 100);
}

function draw() {
  
  noStroke();
  fill(random(1, 255), random(1, 255), random(1, 255));
  ellipse(random(width), random(height), random(width), random(height));
  
  
  fill(random([1], [255]), random([1], [255]), random([1], [255]));
  ellipse(random(width), random(height), random(1,300), random(1,300));
  
  
}
