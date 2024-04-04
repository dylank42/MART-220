

function setup() {
    createCanvas(800, 800, WEBGL);
  
  
}

// display all the frames using the draw function as a loop
function draw() {

    background(120);
    push();
    ambientLight(25,25, 150); 
    ambientMaterial(125, 127, 80); // coral material
    rotateX(8);
    rotateY(8);
    rotateZ(8);
    translate(200, 0, 0)
    box(50,70,80);
    pop();
    push();
    translate(200,-200,-100);
    box(130);
    pop();

    
    push();
    translate(400,-100,-200);

    normalMaterial();
    rotateX(frameCount * .01);
   
    cone(40, 100, 100);
    pop();

    for(let i = 0; i < 50; i+=10){
        push();
        fill(i * 0.1, 100, 100);
      
        //line
        translate(0, 100, 0);
        line(-100, 0, i, 100, 0, i);
      
        //triangles
        translate(0, 100, 0);
        triangle(
          0, sin( i + frameCount * 0.1) * 10, i, 
          60, 60, i, 
          -60, 60, i);
      
        //quad
        translate(0, 200, 0);
        quad(
          -100, i, 0,
          100, i, 0,
          -100, 100, i,
          100, 100, i
          );
        pop();
      }
}

