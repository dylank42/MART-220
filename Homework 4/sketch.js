//Week 3
//Orange
var orangex = 120;
var orangey = 280;
var orangeSpeed = 0;
//Lemon
var lemonx = 260;
var lemony = 140;
var lemonSpeed = 0;

//WEEK 4
//img
var img;
var xImage = 50, yImage = 485;
//img2
var img2;
var xImage2 = 570, yImage2 = 485;
//img3
var img3;
var xImage3 = 700, yImage3 = 0;
var imagespeedX3, imagespeedY3;

//font
var myFont;
var myFont2;
var myFont3;
//time
var myTime = 10;



function setup() {
  createCanvas(800, 600);
  orangeSpeed = random(1,5);
  lemonSpeed = 5;

  img = loadImage("images/image1.jpeg");
  img2 = loadImage("images/image2.jpeg");
  img3 = loadImage("images/image3.jpg");
  imagespeedX3 = random(1,5);
  imagespeedY3 = random(1,5);

  myFont = loadFont("example/fonts/BaksoSapi.otf");
  myFont2 = loadFont("example/fonts/Sweet Charm.ttf");
  myFont3 = loadFont("example/fonts/ExtremeFilled.ttf");

  setInterval(changeTime, 1000);
}

function draw() {
  background(170,220,256);
  
  //TITLE
  //name
  fill(0)
  textSize(25)
  textFont(myFont2);
  text("Dylan Kidd",width/2-50,570)
  //title
  textSize(40)
  textFont(myFont);
  text("Favorite Food",20,50)
  //description
  textSize(10)
  text("move the lemon using wasd keys",20,65)
  text("watch out for the rolling orange and the lemon squeezer!",20,85)
  //time
  fill(200,0,100);
    textSize(25);
    textFont(myFont3);
    text(myTime + " seconds", 650, 50);

  //Image 1
    image(img, xImage, yImage);
  //Image 2
    image(img2, xImage2, yImage2);
  //Image 3
    image(img3, xImage3, yImage3);
    xImage3 += imagespeedX3;
    yImage3 += imagespeedY3;

    if (xImage3 >= width || xImage3 <= 0) {
    imagespeedX3 *= -1;
    }
    if (yImage3 >= height || yImage3 <= 0) {
    imagespeedY3 *= -1;
    }
  

  //ORANGE
  fill(223,123,0)
  circle(orangex,orangey,150);
  orangex += orangeSpeed;
  //contiunes
  if(orangex>=width)
    {
     orangex=0;
    }

  //BLUEBERRIES
  fill(80,80,200)
  circle(90,110,30);
  circle(150,135,30);
  circle(110,140,30);
  
  //LEMON
  fill(245, 238, 34)
  ellipse(lemonx,lemony,90,70);
  
    //CHERRIES
  fill(680,30,20)
  circle(270,280,30);
  circle(310,280,30);
  line(310, 268, 290, 220);
  line(270, 268, 290, 220);

//If hit wall then come from other side
    //down
    if(lemonx >= width)
    {
        lemonx = 0;
    }
    //up
    else if( lemonx <= 0)
    {
        lemonx = width;
    }
    //right
    if(lemony >= height)
    {
        lemony = 0;
    }
    //left
    else if( lemony <= 0)
    {
        lemony = height;
    }
//WASD KEYS
  if(keyIsPressed)
    {
        if(key == 'w')
        {
            lemony -= 5;
        }
        if(key == 's')
        {
            lemony += 5;
        }
        if(key == 'a')
        {
            lemonx -= 5;
        }
        if(key == 'd')
        {
            lemonx += 5;
        }
    }

// var hasCollided = checkCollision(xImage, yImage, 100, 100, xImage2, yImage2, 100, 100);
    if(checkCollision(orangex, orangey, 100, 100, lemonx, lemony, 100, 100))
    {
        //lose
        fill(200,0,100);
        textSize(80);
        textFont(myFont2);
        text("You lose", width / 2, height / 2);

        orangeSpeed = 0;
        lemonSpeed = 0;
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