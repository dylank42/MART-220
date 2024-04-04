var words = "Score: ";

var score = 4;

var multiplier = 3;

function setup()
{
    createCanvas(500, 600);
   // text(words + score + multiplier);
}

function draw()
{
    background(120);
    textSize(32);
     text(words + score + multiplier, 100, 100);
}