class myImage
{
    // constructor
    // these variables only exist in this class
    constructor(myFileName, x, y, w, h)
    {
        this.myFileName = myFileName;
        this.characterImage = loadImage(myFileName);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    // properties
    // like adjectives

    // functions
    // like verbs
    updateX(x)
    {
        this.x = x;
    }

    //in classes don't need the word 'function'
    draw()
    {
        this.characterImage.resize (this.w/5, this.h/3)
        image(this.characterImage, this.x, this.y);
    }

    checkCollision(x2, y2, w2, h2) {

        if (
            this.x+this.w/2 - w2 / 2 < x2 + this.h / 2 &&
            this.x-this.w/2 + w2 / 2 > x2 - this.w / 2 &&
            this.y-this.h/4 - h2 / 2 < y2 + this.h / 2 &&
            this.y-this.h/4 + h2 / 2 > y2 - this.h / 2
        ) {
            return true;
        } else {
            return false;
        }
    }
}