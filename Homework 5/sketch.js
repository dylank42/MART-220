var time = 10;
var i = 0;
var counter = 0;
var flipX = false;
var speedX2, speedY2;

var objectToEat;
var objectToDraw;
var myObject;

//Cycles
var idleCycle = [];
var walkingCycle = [];
var idleStrings = [];
var walkStrings = [];

//Effects
var xImage = 50, yImage = 485;

function preload() {
    idleStrings = loadStrings("../textfiles/idle.txt");
    walkStrings = loadStrings("../textfiles/walk.txt");
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

    setInterval(changeTime, 100);

    objectToEat = new myImage("../images/food.png", 500, 400, 100, 100);
}

function draw() {
    background(247, 128, 106);
    ///myObject.draw();

    //Effects
    image(img, 200, 300);
    image(img, 500, 410);
    image(img, 400, 100);
    image(img, 100, 50);

    //Eat
        if (objectToEat != null) {
        objectToEat.draw();
        }

    //if(flipX)
    // {
    //push();
    //scale(-1, 1);
    //    idleCycle[i].draw();
    //pop();
    //}
    //else
    // {
    //image(idleCycle[i], xImage, yImage);
    //    idleCycle[i].draw();
    //}

    //If hit wall then come from other side
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
            yImage -= 5;
        }
        if (key == 's') {
            yImage += 5;
        }
        if (key == 'a') {
            xImage -= 5;
            flipX = true;
        }
        if (key == 'd') {
            xImage += 5;
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

        if (objectToEat != null) {
            if (walkingCycle[i].checkCollision(objectToEat.x, objectToEat.y, objectToEat.w, objectToEat.h)) {
                objectToEat = null;
            }
        }
        for (var ii = 0; ii < walkingCycle.length; ii++) {
            walkingCycle[ii].x = xImage;
            //walkingCycle[ii].updateFlip(flipX);
            idleCycle[ii].x = xImage;
            //idleCycle[ii].updateFlip(flipX);
        }
    }
    else {
        idleCycle[i].draw();
    }
}

/*        
    for(var ii = 0; ii < walkingCycle.length; ii++)
        {
            idleCycle[ii].x = xImage;
            idleCycle[ii].updateFlip(flipX);

            if (objectToEat != null) {
                if (walkingCycle[ii].checkCollision(objectToEat.x, objectToEat.y, objectToEat.w, objectToEat.h)) {
                  objectToEat = null;
                }
                
            if (objectToEat != null && walkingCycle[ii].checkCollision(objectToEat.x, objectToEat.y, objectToEat.w, objectToEat.h)) {
                objectToEat = null;
                }
            }

    objectToDraw = walkingCycle;
    else
    {
        objectToDraw = idleCycle;
    }
*/

function changeTime() {
    i++;
    if (i > idleCycle.length - 1) {
        i = 0;
    }
    if (i > walkingCycle.length - 1) {
        i = 0;
    }
}