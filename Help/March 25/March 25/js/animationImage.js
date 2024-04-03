class animationImage {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.currentAnimation;
        this.createAnimation();
        this.direction = "";
        this.hasCollided = false;
        this.directions = {
            right: 0,
            left: 180,
            up: 270,
            down: 90

        }
    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }

    setX(x) {
        this.x = x;
    }

    getCurrentAnimation()
    {
        return this.currentAnimation;
    }
    setCurrentFrameCount(currentFrameCount) {
        this.currentFrameCount = currentFrameCount;
    }

    createAnimation() {
        this.currentAnimation = new Sprite(this.x, this.y);
        this.currentAnimation.rotation = 0;
        this.currentAnimation.frameDelay=100;
    }

    myLoadAnimation(animationType, fileNames) {
        this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length - 1]);
        // set the hit box
        this.currentAnimation.width = 200;
        this.currentAnimation.height = 700;
    }


    drawAnimation(animationType) {
         
        this.currentAnimation.scale = .070;
        this.currentAnimation.changeAnimation(animationType);
        this.currentAnimation.rotation = 0;
       // world.gravity.y = 75;

        if(this.hasCollided)
        {
            this.currentAnimation.speed = 0;
            this.currentAnimation.velocity.x = 0;
           // this.currentAnimation.velocity.y = 0;
        }
        else
        {
            this.currentAnimation.speed = 2;
        }
        if(animationType == "walk")
        {
            if (this.direction == 'forward') {
                this.currentAnimation.direction = this.directions.right;
                this.currentAnimation.mirror.x = false;
            }
            else if (this.direction == 'reverse') {
                this.currentAnimation.mirror.x = true;
                this.currentAnimation.direction = this.directions.left;
            }
            else if (this.direction == 'up') {
                this.currentAnimation.direction = this.directions.up;
            }
            else if (this.direction == 'down') {
                this.currentAnimation.direction = this.directions.down;
            }
        }
        else {
            this.currentAnimation.velocity.x = 0;
            this.currentAnimation.velocity.y = 0;  
        }
        
    }

    updatePosition(direction) {
        this.direction = direction;  
    }

    updateVelocityY(y)
    {
        this.currentAnimation.velocity.y = y;
    }
    isColliding(myImage) {
        this.hasCollided =  this.currentAnimation.collide(myImage);
        return this.hasCollided;
    }
}