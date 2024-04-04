let img;
var font;

function preload() {
  img = loadImage('images/texture.jpeg');
  font = loadFont("fonts/BaksoSapi.otf");
}

function setup() {
    createCanvas(1500, 800, WEBGL);
}

function draw() {
    background(60, 59, 107);
    ambientLight(255);

    fill(240);
    textSize(25);
    textFont(font);
    text("Dylan Kidd", -550, -270, 0);
    textSize(15);
    text("The Space Project", -550, -200, 0);



    push();
    normalMaterial();
    translate(0, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(150);
    pop();

    push();
    ambientMaterial(125, 220, 70);
    translate(400, 40, 0);
    rotateX(frameCount * 0.06);
    rotateY(frameCount * 0.001);
    torus(50, 15, 24, 16);
    pop();

    push();
    ambientMaterial(107, 233, 255);
    translate(-300, -100, -20);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cone(40, 70);
    pop();

    push();
    normalMaterial();
    translate(0, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    plane(350, 350);
    pop();

    push();
    texture(img);
    translate(-300, 150, -20);
    rotateX(frameCount * 0.05 / 50 * PI);
    rotateY(frameCount * 0.01);
    box(50);
    pop();
}
