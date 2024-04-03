var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
var deadPaths = [];
let catImage;
let brainImage;
let wallImages = [];
let grid = [];
let catEnemy;
let speed = -2;
let catCount = 0;
let catInterval;
let isDead = false;
const particles = [];
let isExplosion = false;
var currentX = 100, currentY = 500;
let score = 0;
let isWon = false;
function preload() {
    idlePaths = loadStrings("./textfiles/idle.txt");
    walkPaths = loadStrings("./textfiles/walk.txt");
    deadPaths = loadStrings("./textfiles/dead.txt");
    gridStrings = loadStrings('./textfiles/grid.txt');
}

function setup() {
    createCanvas(800, 1000);
    camera.zoom = 6;
    myAnimation = new animationImage(250, 350, 150, 150);
    myAnimation.myLoadAnimation('idle', idlePaths);
    myAnimation.myLoadAnimation('walk', walkPaths);
    myAnimation.myLoadAnimation('dead', deadPaths);

    createField(gridStrings);

    for (let i = 0; i < wallImages.length; i++) {
        wallImages[i].draw();
    }

   catInterval = setInterval(moveEnemyCat, 1000/60);
  
}

// display all the frames using the draw function as a loop
function draw() {

    background(120);
   
    if(isWon)
    {
       // background(100);
       // clear();
        explosion();
        for (let i = 0; i < wallImages.length; i++) {
            wallImages[i].getCurrentSprite().remove();
        }
      //  myAnimation = null;
      //  wallImages = null;
    }
      else
      
      {

      
   // var previousX = myAnimation.getCurrentAnimation().x;
    if (kb.pressing('d')) {
        eatBrains();
       
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
        cameraFollowPlayer();
        checkCat();
      
    }
    else if (kb.pressing('a')) {
        eatBrains();
       
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
        cameraFollowPlayer();
        checkCat();
    }
    else if (kb.pressing('w')) {
        eatBrains();
        
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk');
        cameraFollowPlayer();
        checkCat();
    }
    else if (kb.pressing('s')) {
        eatBrains();
        
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('walk');
        cameraFollowPlayer();
        checkCat();
    }
    else if(isDead)
    {
        myAnimation.drawAnimation('dead');
        isDead = false;
    }
    else {
        myAnimation.drawAnimation('idle');
        cameraFollowPlayer();
    }

    displayScore();
}
    // brainImage.debug = mouseIsPressed;

}

function displayScore()
{
    textSize(24);
    fill(255,255, 255);
    text("Score: " + score, 300, 40);
}
function checkCat()
{
    for (let i = 0; i < wallImages.length; i++) {
        if (myAnimation.isColliding(wallImages[i].getCurrentSprite())) {
            if (wallImages[i].getCurrentSprite().img.url == "./images/cat.png")
            {  
                clearInterval(catInterval);
                isDead = true;
            }
            break;
        }
    }
}
function createField(myField) {
    let currentLine = [];
    let x = 0;
    let y = 0;
    let counter = 0;
    for (let i = 0; i < myField.length; i++) {
        currentLine = myField[i].split(",");
        for (let j = 0; j < currentLine.length; j++) {
            if (currentLine[j] == 'x') {
                wallImages[counter] = new imageClass(x, y, 50, 50, "./images/wall.png", 1, 50, 'static');
                counter++;
            }
            else if (currentLine[j] == 'o') {
                wallImages[counter] = new imageClass(x, y, 50, 50, "./images/brain.png", .75, 50, 'kinematic');
                counter++;
            }
            else if (currentLine[j] == 'c') {
                wallImages[counter] = new imageClass(x, y, 50, 50, "./images/cat.png", .75, 50, 'kinematic');
                catEnemy = wallImages[counter];
                counter++;
            }
            x += 50;
        }
        x = 0;
        y += 50;
    }
}

function eatBrains() {
    for (let i = 0; i < wallImages.length; i++) {
        if (myAnimation.isColliding(wallImages[i].getCurrentSprite())) {
            if (wallImages[i].getCurrentSprite().img.url == "./images/brain.png")
            {
                score++;
                if(score == 10)
                {
                    currentX = myAnimation.getCurrentAnimation().x + 160;
                    currentY = myAnimation.getCurrentAnimation().y + 50;
                    isWon = true;
                }
                wallImages[i].getCurrentSprite().remove();
            }
                
           
            break;
        }
    }
}

function cameraFollowPlayer() {
    camera.x = myAnimation.getCurrentAnimation().x;
 
    camera.y = myAnimation.getCurrentAnimation().y;
}

function moveEnemyCat()
{
    catEnemy.getCurrentSprite().x += speed;
    catCount++;
    if(catCount > 150)
    {
        speed *= -1;
        catCount = 0;
    }
}

function explosion()
{
   
    for (let i = 0; i < 50; i++) {
        let p = new Particle(currentX, currentY);
        particles.push(p);
      }
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
          // remove this particle
          particles.splice(i, 1);
        }
      }
}

