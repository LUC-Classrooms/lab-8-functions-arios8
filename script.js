function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  //this is a call to myShape()
  myShape(width / 2, height / 2, 50, 50);
  // myShape() takes three arguments
  // arg1: horizontal location
  // arg2: vertical location
  // arg3: scale factor (1 is full size)
  /* add two more calls to myShape that draw your shape in different locations
  */
  
}

function myShape(x, y, w, h) {
 
  /*fill(100,100,200); 
  ellipse(x, y, w, h); // simple ellipse at the translated origin (0,0)
  rectMode(CENTER);
  fill(0);
*/
arc(200, 200, 100, 100, 0, 180);  

}
