var walk1;
var xImage = 100, yImage = 25;
var speedX, speedY;
var myFont;

var myTime = 10;

var walk2;
var walk3;
var walk4;
var walk5;
var walk6;
var walk7;
var walk8;
var walk9;
var walk10;

var speedX2, speedY2;

var walkingCycle = [];

var i = 0;

var flipX = false;

var myObject;

function preload() {
  
}

function setup() {
    createCanvas(600, 800);

    for(var k = 0; k < 8; k++)
    {
        console.log("images/Dead (" + (k+1) + ").png");
        walkingCycle[k] =  new myImage("images/Dead (" + (k+1) + ").png", 50, 300, 680, 472);;
   
    }
  
    for (var i = 0; i < walkingCycle.length; i++) {
      //  walkingCycle[i].resize(walkingCycle[i].width / 5, 0);

    }


    myFont = loadFont("fonts/ProtestRiot-Regular.ttf");

    setInterval(changeTime, 100);
}
// this runs continuously
function draw() {
    background(120);
    //myObject.draw();

    if (flipX) {
        
        push();
        scale(-1, 1);

        // Because the x-axis is reversed, we need to draw at different x position.
        //  image(walkingCycle[i], -xImage-walkingCycle[i].width/2, yImage);
       // walkingCycle[i].draw();
      //  console.log(-xImage);
        pop();
    }
    else {
        //console.log(xImage);

        walkingCycle[i].draw();
        //image(walkingCycle[i], xImage,yImage);
    }

    if (keyIsPressed) {
        if (key == "w") {
            yImage -= 1;
        }
        if (key == "s") {
            yImage += 1;
        }
        if (key == "a") {
            xImage -= 1;
          //  console.log(xImage);

           walkingCycle[i].updateX(xImage);
            flipX = true;
        }
        if (key == "d") {
            xImage += 1;
            for(var ii = 0; ii < walkingCycle.length; ii++)
            {
                walkingCycle[ii].updateX(xImage);
            
            }
            console.log(i);
          // console.log()
            flipX = false;
        }


    }


    fill(100, 252, 169);
    textSize(24);
    textFont(myFont);
    text("Hello and Yippee", 400, 300);



    fill(36, 250, 100);
    textSize(15);

    text(myTime + " seconds", 50, 50);



}

function checkCollision(x, y, w, h, x2, y2, w2, h2) {

    if (
        x - w / 2 < x2 + w2 / 2 &&
        x + w2 / 2 > x2 - w / 2 &&
        y - h2 / 2 < y2 + h / 2 &&
        y + h2 / 2 > y2 - h / 2

    ) {
        return true;
    } else {
        return false;
    }
}

function changeTime() {

    i++;
    if (i > walkingCycle.length - 1) {
        i = 0;
    }

    //   console.log(i);
    //   myTime--;
    //   if(myTime < 0)
    //   {
    // reset
    //      myTime = 10;
    //  }
    //myTime -= 1;
    //myTime = myTime - 1;
}

