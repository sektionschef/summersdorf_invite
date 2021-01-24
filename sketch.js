// house
// bird sound

let canvasWidth = 1000;
let canvasHeight = 800;

let red = 0;
let green = 0;
let blue = 0;

// start position sun
let sunY = canvasHeight;
let sunMaxY = 144;
let risen = false;


let sunCenterX = canvasWidth / 2;
let sunCenterY = canvasHeight / 2;
let radius = 200;

let endBlue;
let startYellow;
let secondaryBlue;
let colorNow;
let amount;
let black;

let soundtrack;
let house;


function preload() {
  soundtrack = loadSound('Sunny Day-SoundBible.com-2064222612.mp3');
  house = loadImage('house_200.png');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  endBlue = color(112, 208, 255);
  startYellow = color(255, 222, 112);
  secondaryBlue = color(58, 110, 250);
  black = color(0,0,0);
}

function draw() {

  // dynamics of sun
  var angle = map(mouseX, 0, width, PI, 2*PI);
  let sunDynX = sunCenterX + cos(angle) * radius;
  let sunDynY = sunCenterY + sin(angle) * radius;

  // background(red += 5, green++, blue);

  // color change
  if (!risen && sunY >= (height/2)) {
    amount = map(sunY, height, (height/2), 0, 1);
    colorNow = lerpColor(black, startYellow, amount);
  } else if (!risen && sunY < (height/2)) {
    amount = map(sunY, height/2, sunMaxY, 0, 1);
    colorNow = lerpColor(startYellow, endBlue, amount);
  } else {
    amount = map(sunDynY, (sunMaxY+400), sunMaxY, 0, 1);
    colorNow = lerpColor(secondaryBlue, endBlue, amount);
  }
  background(colorNow);


  //sun
  //outer
  noStroke();
  fill(255, 165, 0, 100);
  if (sunY > sunMaxY && !risen) {
    circle(500, sunY--, 200);
  } else if (sunY == sunMaxY && !risen) {
    circle(500, sunY, 200);
    risen = true;
  } else {
    circle(sunDynX, sunDynY, 200);
  }
  //inner
  noStroke();
  fill(255, 100, 0, 150);
  if (sunY > sunMaxY && !risen) {
    circle(500, sunY--, 150);
  } else if (sunY == sunMaxY && !risen) {
    circle(500, sunY, 150);
    risen = true;
  } else {
    circle(sunDynX, sunDynY, 150);
  }

  // mountain
  noStroke();
  fill("#7b3705");
  triangle(0, height, 250, height / 2, 500, height);
  fill(150, 100, 0);

  push();
  fill("#55ae29");
  rect(0, height - 30, width, 60);
  // roof
  fill(230);
  rect(0, height - 145 - 60, width, 60);
  // faccade
  fill(150);
  rect(0, height - 145, width, 120);
  pop();

  image(house, (width/2 - house.width/2), (height - house.height + 15));

  // text
  fill("#7b3705");
  textSize(26);
  let s = 'Summersdorf Office';
  // fill(50);
  text(s, 100, 100, 300, 200); // Text wraps within text box

}

function mousePressed() {
  soundtrack.play();
}
