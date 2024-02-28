class myImage
{

    // constructor
    constructor(myFileName, x, y, w, h)
    {
       // this.myFileName = myFileName;
        this.characterImage = loadImage(myFileName);
        this.x = x;
        this.y = y; 
        this.w = w;
        this.h = h;

    }
    // properties

    // functions
    updateX(x)
    {
        this.x = x;
    }
    
    draw()
    {

        image(this.characterImage, this.x, this.y);
    }
}