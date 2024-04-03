class imageClass{

  constructor(x,y,w,h, imagePath, scale, diameter, type)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.imagePath = imagePath;
    this.scale = scale;
    this.diameter = diameter;
    this.imageSprite = new Sprite(x, y, type);  
  }
    
  draw()
  {
    this.imageSprite.img = this.imagePath;
    this.imageSprite.scale = this.scale;
    this.imageSprite.diameter = this.diameter;
 
  }

  getCurrentSprite()
  {
    return this.imageSprite;
  }
}