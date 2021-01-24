// mouse interactivity
// blue sky
// bird sound

let canvasWidth = 1000;
let canvasHeight = 800;

let red = 0;
let green = 0;
let blue = 0;

// start position sun
let sunY = canvasHeight;


let sunCenterX = canvasWidth / 2;
let sunCenterY = canvasHeight / 2;
let radius = 200;


function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  // color change
  background(red += 5, green++, blue);


  //sun
  //outer
  noStroke();
  fill(255, 165, 0, 50);
  if (sunY > 144) {
    circle(500, sunY--, 200);
  } else if (sunY == 144) {
    circle(500, sunY, 200);
  }
  //inner
  noStroke();
  fill(255, 100, 0, 100);
  if (sunY > 144) {
    circle(500, sunY--, 150);
  } else if (sunY == 144) {
    circle(500, sunY, 150);
  }

  var angle = map(mouseX, 0, width, PI, 2*PI);
  let sunsX = sunCenterX + cos(angle) * radius;
  let sunsY = sunCenterY + sin(angle) * radius;
  circle(sunsX, sunsY, 100);


  noStroke();
  fill(150, 75, 0);
  triangle(0, canvasHeight, 250, canvasHeight / 2, 500, canvasHeight);
  fill(150, 100, 0);
  // triangle(500, 400, 750, 200, 1000, 400);

  textSize(26);
  let s = 'Summersdorf Office';
  // fill(50);
  text(s, 100, 100, 300, 200); // Text wraps within text box

}
