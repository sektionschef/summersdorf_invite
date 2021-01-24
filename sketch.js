let red=0;
let green=0;
let blue=0;
let sun=400;
function setup(){
  createCanvas(1000, 400);
}

function draw(){
  background(red+=5, green++, blue);


  //sun
  //outer
  noStroke();
  fill(255, 165, 0, 50);
  if(sun>144){
    circle(500, sun--, 200);
  }
  else if(sun==144){
    circle(500, sun, 200);
  }
  //inner
  noStroke();
  fill(255, 100, 0, 100);
  if(sun>144){
    circle(500, sun--, 150);
  }
  else if(sun==144){
    circle(500, sun, 150);
  }


  noStroke();
  fill(150, 75, 0);
  triangle(0, 400, 250, 200, 500, 400);
  fill(150, 100, 0);
  triangle(500, 400, 750, 200, 1000, 400);

}
