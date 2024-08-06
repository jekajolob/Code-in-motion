function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
}

function draw() {
    background(220);
    fill(0);
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
