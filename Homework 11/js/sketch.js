let idlePaths = [];
let myAnimation;
let walkPaths = [];
let cactusImage;
let strawberryImage;
let cheeseImage;
let backgroundSound;
let score = 0;
let myTime = 10;
let isWon = false;
let particles = [];
var currentX = 400, currentY = 300;

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

    cactusImage = new Sprite(random(width), random(height), 300, 100, 'static');
    cactusImage.img = "../images/cactus.png";
    cactusImage.scale = 0.9;
    cactusImage.diameter = 20;
    respawnStrawberry();
    respawnCheese();

    setInterval(countDown, 1000);
}

function draw() {
    background(247, 128, 106);
    displayGameInfo();

    if (isWon) {
        fill(300);
        textSize(25);
        text("You Win!", width / 2, 370);
        explosion(strawberryImage.x, strawberryImage.y);
    } else {
        handlePlayerMovement();
        eatStrawberry();
    }
}

function handlePlayerMovement(){
    if (kb.pressing('d')) {
        eatStrawberry();
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
        eatStrawberry();
        if (myAnimation.isColliding(cactusImage)) {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
        }
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
    }
    else if (kb.pressing('w')) {
        eatStrawberry();
        if (myAnimation.isColliding(cactusImage)) {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');

        }
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk');

    }
    else if (kb.pressing('s')) {
        eatStrawberry();
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

function displayGameInfo() {
    fill(300);
    textSize(25);
    text("Dylan Kidd", width / 8 - 50, 570);

    textSize(40);
    text("Zombie v.s. Stawberry", 20, 50);

    textSize(10);
    text("move the zombie using wasd keys", 20, 70);
    text("collect all the strawberries to win! Collect 5 strawberries to win but if you have 0 you lose.", 20, 85);

    fill(200, 0, 0);
    textSize(25);
    text(myTime + " seconds", 650, 50);

    fill(100, 252, 169);
    textSize(24);
    text("Strawberries: " + score, 450, 50);
}

function eatStrawberry() {
    if (myAnimation.isColliding(strawberryImage)) {
        strawberryImage.remove();
        respawnStrawberry();
        score++;

        if (score === 5) {
            isWon = true;
        }
    }
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
        myTime = 10;
    }
}

function mousePressed() {
    backgroundSound.loop();
}

function explosion() {
    for (let i = 0; i < 50; i++) {
        let p = new Particle(currentX, currentY);
        particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
    }
}