var i = 0;
var counter = 0;
var flipX = false;
var speedX2, speedY2;

var objectToEat;
var objectToEatBad;
var objectToDraw;
var myObject;
var score = 0;

//time
var myTime = 10;

//Cycles
var idleCycle = [];
var walkingCycle = [];
var idleStrings = [];
var walkStrings = [];

//Effects
var xImage = 50, yImage = 300;

var backgroundSound;
var eatSound;

function preload() {
    idleStrings = loadStrings("../textfiles/idle.txt");
    walkStrings = loadStrings("../textfiles/walk.txt");
    backgroundSound = loadSound("../sounds/background.wav");
    eatSound = loadSound("sounds/chomp.wav");
    eatSoundBad = loadSound("sounds/yuck.mp3");
}

function setup() {
    createCanvas(800, 600);

    for (var k = 0; k < idleStrings.length; k++) {
        idleCycle[k] = new myImage(idleStrings[k], 50, 300, 680, 472);
    }
    for (var k = 0; k < walkStrings.length; k++) {
        walkingCycle[k] = new myImage(walkStrings[k], 50, 300, 680, 472);
    }

    //Effects
    img = loadImage("images/cactus.png");

    objectToEat = new myImage("../images/food.png", 500, 400, 140, 100);
    objectToEatBad = new myImage("../images/food2.png", 300, 400, 140, 100);
    setInterval(changeTime, 100);
    setInterval(countDown, 1000);
}

function draw() {
    background(247, 128, 106);
    ///myObject.draw();

    //TITLE
    //name
    fill(300)
    textSize(25)
    text("Dylan Kidd", width / 8 - 50, 570)
    //title
    textSize(40)
    text("Zombie v.s. Stawberry", 20, 50)
    //description
    textSize(10)
    text("move the zombie using wasd keys", 20, 70)
    text("collect all the strawberries to win!", 20, 85)
    //time
    fill(200, 0, 0);
    textSize(25);
    text(myTime + " seconds", 650, 50);
    //score
    fill(100, 252, 169);
    textSize(24);
    text("Strawberries: " + score, 450, 50);

    //Effects
    image(img, 200, 300);
    image(img, 500, 410);
    image(img, 400, 100);
    image(img, 100, 80);

    //Eat
    if (objectToEat != null) {
        objectToEat.draw();
    }
    else {
        objectToEat = new myImage("../images/food.png", random(width), random(height), 170, 100);
    }

    //Eat
    if (objectToEatBad != null) {
        objectToEatBad.draw();
    }
    else {
        objectToEatBad = new myImage("../images/food2.png", random(width), random(height), 170, 100);
    }


    //Hit wall
    //down
    if (xImage >= width) {
        xImage = 0;
    }
    //up
    else if (xImage <= 0) {
        xImage = width;
    }
    //right
    if (yImage >= height) {
        yImage = 0;
    }
    //left
    else if (yImage <= 0) {
        yImage = height;
    }

    //WASD KEYS
    if (keyIsPressed) {
        if (key == 'w') {
            yImage -= 3;
        }
        if (key == 's') {
            yImage += 3;
        }
        if (key == 'a') {
            xImage -= 3;
            flipX = false;
        }
        if (key == 'd') {
            xImage += 3;
            flipX = false;
        }

        if (flipX) {
            push();
            scale(-1, 1);
            walkingCycle[i].draw();
            pop();
        }
        else {
            walkingCycle[i].draw();
        }

        for (var ii = 0; ii < walkingCycle.length; ii++) {
            walkingCycle[ii].x = xImage;
            walkingCycle[ii].y = yImage;
            idleCycle[ii].x = xImage;
            idleCycle[ii].y = yImage;

            if (objectToEat != null) {
                if (walkingCycle[i].checkCollision(objectToEat.x, objectToEat.y, objectToEat.w, objectToEat.h)) {
                    objectToEat = null;
                    eatSound.play();
                    score++;
                }
            }
            if (objectToEatBad != null) {
                if (walkingCycle[i].checkCollision(objectToEatBad.x, objectToEatBad.y, objectToEatBad.w, objectToEatBad.h)) {
                    objectToEatBad = null;
                    eatSoundBad.play();
                    score--;
                }
            }
        }
    }
    else {
        idleCycle[i].draw();
    }
}


function changeTime() {
    i++;
    if (i > idleCycle.length - 1) {
        i = 0;
    }
    if (i > walkingCycle.length - 1) {
        i = 0;
    }
}

function countDown() {
    myTime--;
    if (myTime < 0) {
        // reset
        myTime = 10;
        //createANewFoodItem();
    }
}

function mousePressed(){
    backgroundSound.loop();
}