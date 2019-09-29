function setup() {
  createCanvas(400, 400);
  frameRate(5)
}

//track the circle to draw next frame
var x = 350;
var y = 350;

var xd = 1;
var yd = 1;


function draw() {
  colorMode(HSB);
  stroke(255);
  
  //draw circle with random hue
  fill(random(255), random(25, 255), random(25, 255));
  ellipse(x, y, 40);
  
  
  if (x >= 50 && y >= 350) {
  x = x - 25;
  }
    
    //draw circle with random hue
  fill(random(255), random(25, 255), random(25, 255));
  ellipse(x, y, 40);
  
  if (x < 44 && y > 25) {
    y = y - 25;
  }
  
    //draw circle with random hue
  fill(random(255), random(25, 255), random(25, 255));
  ellipse(x, y, 40);
  
  if (x == y) {
    x = x + 19;
    y = y + 19;
    
  }
  
}
