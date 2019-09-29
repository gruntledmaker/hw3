# hw3

  1. Lines 10 & 11, 

     stroke(random(60, 70), 100, 90);
     line(x, height-10, x+random(-10, 10), height-10-random(h));
  
  respectively.
  
  2. Lines 21 - 25, dictate that a random number shall be determined between 1 & 100, and if that number arrives at exactly     100.0 and only 100.0 so that it qualifies as greater than 99.9, the 'if' statement determines that the lawnmower will         resetthe screen to blank by covering all but the bottom 15 pixels of the canvas, and sets the value of var h to 10.
  
  3. The h variable occurs in Line 11, Line 18, and Line 24, and those careful positions determine the potential height of any   new blade of grass based on keeping any new blade relatively close to the maximum height of the last blade, as shown in line   18, where if the value of a grass blade's root, x (which is constantly growing), reaches the end of the canvas on the right   side of the screen, x resets within the first 10 pixels of the left side of the frame with the potential height of any blade   of grass being raised by 3 pixels.
  
  4. The first appearance of the -10 argument dictates that the y position of the root of every piece of grass be 10 pixels     from the bottom of the frame, as  height-10  functions with the maximum parameter of the canvas being the bottom.
  The second argument appears as  height-10-random(h)  , which places the y coordinate of the tip of a blade of grass as being   somewhere between the brown-colored ground and the value of h pixels tall, again demonstrating h's functionality as the       determinant of height.
