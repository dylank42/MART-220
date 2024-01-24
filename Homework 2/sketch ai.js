function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Draw pizza base
  fill(255, 223, 158); // Light brown color for pizza base
  ellipse(200, 200, 300, 300);

  // Draw tomato sauce
  fill(255, 0, 0); // Red color for tomato sauce
  ellipse(200, 200, 280, 280);

  // Draw cheese
  fill(255, 235, 59); // Yellow color for cheese
  ellipse(200, 200, 250, 250);

  // Draw pepperoni
  fill(255, 0, 0); // Red color for pepperoni
  ellipse(150, 150, 50, 50);
  ellipse(250, 250, 50, 50);
  ellipse(250, 150, 50, 50);
  ellipse(150, 250, 50, 50);
}