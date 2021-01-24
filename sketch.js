// mouse interactivity
// house
// blue sky
// bird sound

let canvasWidth = 1000;
let canvasHeight = 800;

let red = 0;
let green = 0;
let blue = 0;

// start position sun
let sunY = canvasHeight;
let risen = false;


let sunCenterX = canvasWidth / 2;
let sunCenterY = canvasHeight / 2;
let radius = 200;


function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  // color change
  background(red += 5, green++, blue);


  // dynamics of sun
  var angle = map(mouseX, 0, width, PI, 2*PI);
  let sunDynX = sunCenterX + cos(angle) * radius;
  let sunDynY = sunCenterY + sin(angle) * radius;


  //sun
  //outer
  noStroke();
  fill(255, 165, 0, 50);
  if (sunY > 144 && !risen) {
    circle(500, sunY--, 200);
  } else if (sunY == 144 && !risen) {
    circle(500, sunY, 200);
    risen = true;
  } else {
    circle(sunDynX, sunDynY, 200);
  }
  //inner
  noStroke();
  fill(255, 100, 0, 100);
  if (sunY > 144 && !risen) {
    circle(500, sunY--, 150);
  } else if (sunY == 144 && !risen) {
    circle(500, sunY, 150);
    risen = true;
  } else {
    circle(sunDynX, sunDynY, 150);
  }

  // mountain
  noStroke();
  fill(150, 75, 0);
  triangle(0, canvasHeight, 250, canvasHeight / 2, 500, canvasHeight);
  fill(150, 100, 0);


  // text
  textSize(26);
  let s = 'Summersdorf Office';
  // fill(50);
  text(s, 100, 100, 300, 200); // Text wraps within text box

}
