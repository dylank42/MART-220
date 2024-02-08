//ORANGE VAR
var orangex = 120;
var orangey = 280;
var orangeSpeed = 0;

//LEMON VAR
var lemonx = 260;
var lemony = 140;

//WEEK 4
var myFont;


function setup() {
  createCanvas(1000, 1000);
  orangeSpeed = random(1,5);

  pick = loadImage("example/images/bounce1.jpeg");
  pick2 = loadImage("example/images/bounce2.jpeg");

  myFont = loadFont("example/fonts/BaksoSapi.otf");
}

function draw() {
  background(170,220,256);
  
  //TITLE
  fill(0)
  textSize(15)
  textFont(myFont);
  text("Dylan Kidd",310,370)
  textSize(32)
  text("Favorite Food",20,50)
  textSize(10)
  text("move the lemon using wasd keys",20,65)
  
  
  //ORANGE
  fill(223,123,0)
  circle(orangex,orangey,150);
  orangex += orangeSpeed;
  
  
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
  
  

}