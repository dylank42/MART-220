var pick;
var xImage = 50, yImage = 25;
var speedX, speedY;
var myFont;

var myTime = 10;

var pick2;
var xImage2 = 300, yImage2 = 25;
var speedX2, speedY2;

function setup()
{
    createCanvas(600,400);
    pick = loadImage("images/bounce1.jpeg");

    pick2 = loadImage("images/bounce2.jpeg");

    myFont = loadFont("fonts/BaksoSapi.otf");
    speedX = random(1, 5);
    speedY = random(1, 5);

    speedX2 = random(1, 5);
    speedY2 = random(1, 5);

    setInterval(changeTime, 1000);
}
// this runs continuously
function draw()
{
    background(120);
//Image 1
    image(pick, xImage,yImage);

    xImage += speedX;
    yImage += speedY;

    if(xImage >= width-100 || xImage <= 0)
    {
        speedX *=-1;
    }

    if(yImage >= height-100 || yImage <= 0)
    {
        speedY *=-1;
    }

//Image 2
    image(pick2, xImage2,yImage2);

//If hit wall then come from other side
    //down
    if(xImage2 >= width)
    {
        xImage2 = 0;
    }
    //up
    else if( xImage2 <= 0)
    {
        xImage2 = width;
    }
    //right
    if(yImage2 >= height)
    {
        yImage2 = 0;
    }
    //left
    else if( yImage2 <= 0)
    {
        yImage2 = height;
    }

//WASD KEYS
    if(keyIsPressed)
    {
       if(key == 'w')
       {
           yImage2 -= 5;
        }
        if(key == 's')
        {
            yImage2 += 5;
        }
       if(key == 'a')
        {
            xImage2 -= 5;
        }
        if(key == 'd')
        {
            xImage2 += 5;
        }
    }

    fill(100, 252, 169);
    textSize(24);
    textFont(myFont);
    text("Chase Game", 400, 300);



    fill(36,250,100);
    textSize(15);

    text(myTime + " seconds", 50, 50);

   // var hasCollided = checkCollision(xImage, yImage, 100, 100, xImage2, yImage2, 100, 100);
    
    if(checkCollision(xImage, yImage, 100, 100, xImage2, yImage2, 100, 100))
    {
        speedX *= -1;
        speedX2 *= -1;
        speedY *= -1;
        speedY2 *= -1;
    }
    
}

function checkCollision(x,y,w,h, x2,y2,w2,h2)
{
   
	if (
		x - w/2 < x2 + w2/2 &&
		x + w2/2 > x2 -w/2 &&
		y - h2/2 < y2 + h/2 &&
		y + h2/2 > y2 - h/2
	
	){
     return true;
	} else {
     return false;
    }
}

function changeTime()

{
    myTime--;
    if(myTime < 0)
    {
        // reset
        myTime = 10;
    };
}


