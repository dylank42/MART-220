let movement1, movement2;
let tugboat;
let img;
let img2;
let img3;
var font;

function preload() {
  img = loadImage('images/texture.jpeg');
  img2 = loadImage('images/texture2.jpeg');
  img3 = loadImage('images/texture3.jpeg');
  tugboat = loadModel('3d/tugboat.stl', true);
  font = loadFont("fonts/NEON____.TTF");
}

function setup() {
  createCanvas(1000, 800, WEBGL);
  movement1 = createVector(-300, 150, -20);
  movement2 = createVector(250, 150, -20);
}

function draw() {
  background(60, 59, 107);
  ambientLight(255);

//boat
  push();
  texture(img2);
  translate(0, -80, 0);
  scale(2);
  rotateX(1.8);
  rotateZ(-.8);
  rotateZ(frameCount * 0.02);
  model(tugboat);
  pop();

  shapes();
  gameInfo();
}

function mouseClicked() {
  // Randomize positions of cubes when mouse is clicked
  movement1 = createVector(random(-500, 500), random(-300, 300), random(-300, 300));
  movement2 = createVector(random(-500, 500), random(-300, 300), random(-300, 300));
}

function gameInfo() {
  //TITLE
  //name
  fill(255, 16, 240)
  textFont(font);
  textSize(25)
  text("Dylan Kidd", -420, -250, 0)
  //title
  textSize(40)
  text("Auction", -420, -300, 0)
}

function shapes() {

  //ambientMaterial(125, 220, 70);
  push();
  texture(img);
  rotateY(frameCount * .01);
  rotateX(frameCount * .01);
  rotateZ(frameCount * .01);
  translate(movement1.x, movement1.y, movement1.z);
  box(50);
  pop();

  push();
  texture(img3);
  rotateX(frameCount * 0.05 / 50 * PI);
  rotateY(frameCount * 0.01);
  translate(250, 150, -20);
  box(50);
  pop();

  push();
  texture(img2);
  rotateX(frameCount * 0.05 / 50 * PI);
  rotateY(frameCount * 0.01);
  translate(250, 150, -20);
  sphere(35);
  pop();

  push();
  texture(img2);
  rotateX(frameCount * 0.05 / 50 * PI);
  rotateY(frameCount * 0.01);
  translate(movement2.x, movement2.y, movement2.z);
  ellipsoid(10,5);
  pop();

  push();
  normalMaterial();
  rotateY(3);
  rotateX(frameCount * 0.05 / 50 * PI);
  rotateY(frameCount * 0.01);
  translate(50, 50, 220);
  cone(100);
  pop();

  /* 
  push();
  normalMaterial();
  translate(0, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(150);
  pop();
  
  push();
   normalMaterial();
   translate(0, 0);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   plane(350, 350);
   pop();*/
}