var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
var myIdleAnimation;
var idlePaths = [];
let cactusImage;
let strawberryImage;
let cheeseImage;
var backgroundSound;

var i = 0;
var counter = 0;
var score = 0;
var myTime = 10;

function preload() {
    idlePaths = loadStrings("../textfiles/idle.txt");
    walkPaths = loadStrings("../textfiles/walk.txt");
    backgroundSound = loadSound("../sounds/background.wav");
}

function setup() {
    createCanvas(800, 600);
    myAnimation = new animationImage(200, 200, 150, 150);
    myAnimation.myLoadAnimation('idle', idlePaths);
    myAnimation.myLoadAnimation('walk', walkPaths);


    //Cactus
    cactusImage = new Sprite(random(width), random(height), 300, 100, 'static');
    cactusImage.img = "../images/cactus.png";
    cactusImage.scale = 0.9;
    cactusImage.diameter = 20;

    //food respawn
    respawnStrawberry();
    respawnCheese();

    setInterval(countDown, 1000);
}

// display all the frames using the draw function as a loop
function draw() {

    background(247, 128, 106);

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
    text("collect all the strawberries to win! Collect 10 strawberries to win but if you have 0 you lose.", 20, 85)
    //time
    fill(200, 0, 0);
    textSize(25);
    text(myTime + " seconds", 650, 50);
    //score
    fill(100, 252, 169);
    textSize(24);
    text("Strawberries: " + score, 450, 50);

    if (score === 10) {
        fill(0,200,0);
        textSize(40);
        text("You win!", width / 2 - 50, height / 2);
    }

    if (score === 0) {
        fill(200,0,0);
        textSize(40);
        text("You lose!", width / 2 - 50, height / 2);
    }

    if (kb.pressing('d')) {
        if (myAnimation.isColliding(cactusImage)) {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');

        }
        else if (myAnimation.isColliding(strawberryImage)) {
            strawberryImage.remove();
            respawnStrawberry();
            score++;
        }
        else if (myAnimation.isColliding(cheeseImage)) {
            cheeseImage.remove();
            score--;
            respawnCheese();
        }
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');

    }
    else if (kb.pressing('a')) {
        if (myAnimation.isColliding(cactusImage)) {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
        }
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
    }
    else if (kb.pressing('w')) {
        if (myAnimation.isColliding(cactusImage)) {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');

        }
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk');

    }
    else if (kb.pressing('s')) {
        if (myAnimation.isColliding(cactusImage)) {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');

        }
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('walk');
    }
    else {
        myAnimation.drawAnimation('idle');
    }


    strawberryImage.debug = mouseIsPressed;

}

function respawnStrawberry() {
    strawberryImage = new Sprite(random(width), random(height), 100, 100, 'static');
    strawberryImage.img = "../images/food.png";
    strawberryImage.scale = 0.05;
    strawberryImage.diameter = 10;

}
function respawnCheese() {
    cheeseImage = new Sprite(random(width), random(height), 100, 100, 'static');
    cheeseImage.img = "../images/food2.png";
    cheeseImage.scale = 0.02;
    cheeseImage.diameter = 10;

}

function countDown() {
    myTime--;
    if (myTime < 0) {
        // reset
        myTime = 10;
        //createANewFoodItem();
    }
}

function mousePressed() {
    backgroundSound.loop();
}