let donut;

function setup() {
  createCanvas(400, 400);

  // Initialize the donut at a random position
  donut = createDonut(random(width), random(height));
}

function draw() {
  background(220);

  // Update and draw the donut
  moveDonutRandomly(donut);
  drawDonut(donut);
}

// Function to create a donut object
function createDonut(x, y) {
  return {
    x: x,
    y: y,
    outerRadius: 30,
    innerRadius: 15,
    color: [255, 200, 0], // Yellow color
    speedX: random(-2, 2),
    speedY: random(-2, 2),
  };
}

// Function to draw the donut
function drawDonut(donut) {
  fill(donut.color);
  ellipse(donut.x, donut.y, donut.outerRadius * 2, donut.outerRadius * 2);
  fill(220); // Background color for the inner circle
  ellipse(donut.x, donut.y, donut.innerRadius * 2, donut.innerRadius * 2);
}

// Function to move the donut randomly
function moveDonutRandomly(donut) {
  donut.x += donut.speedX;
  donut.y += donut.speedY;

  // Bounce off the walls
  if (donut.x - donut.outerRadius < 0 || donut.x + donut.outerRadius > width) {
    donut.speedX *= -1;
  }
  if (donut.y - donut.outerRadius < 0 || donut.y + donut.outerRadius > height) {
    donut.speedY *= -1;
  }
}