//load the image of the painting application
let img;
function preload() {
  img = loadImage('background.png');
}

function setup() {
  createCanvas(800,600);
  //set background color to white
  background(255);
}

function draw() {
  //insert the image
  image(img, 0, 0, 800, 600);
  //make a brush
  if (mouseIsPressed == true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function mousePressed() {
  //choose the color of the brush
  if (dist (mouseX, mouseY, 640, 55) <35) {
    stroke(255, 0, 0);
  } else if (dist (mouseX, mouseY, 640, 130) < 35) {
    stroke(255, 128, 0);
  } else if (dist (mouseX, mouseY, 640, 205) < 35) {
    stroke(255, 255, 0);
  } else if (dist (mouseX, mouseY, 640, 280) < 35) {
    stroke(0, 128, 0);
  } else if (dist (mouseX, mouseY, 725, 55) < 35) {
    stroke(0, 0, 255);
  } else if (dist (mouseX, mouseY, 725, 130) < 35) {
    stroke(0, 0, 128);
  } else if (dist (mouseX, mouseY, 725, 205) < 35) {
    stroke(128, 0, 128);
  } else if (dist (mouseX, mouseY, 725, 280) < 35) {
    stroke(random(255), random(255), random(255));
  //make erase button
  } else if (dist (mouseX, mouseY, 726, 374) < 25) {
    stroke(255);
  } else if (dist (mouseX, mouseY, 726, 463) < 25) {
    background(255);
  }
  
  //choose the thicknes of the brush
  if (dist (mouseX, mouseY, 640, 360) < 20) {
    strokeWeight(40);
  } else if (dist (mouseX, mouseY, 640, 420) < 15) {
    strokeWeight(30);
  } else if (dist (mouseX, mouseY, 640, 470) < 10) {
    strokeWeight(20);
  } else if (dist (mouseX, mouseY, 640, 510) < 7.5) {
    strokeWeight(15);
  } else if (dist (mouseX, mouseY, 640, 545) < 5) {
    strokeWeight(10);
  }
  
  //make save button
  if (dist (mouseX, mouseY, 726, 549) < 25) {
    save ("my_apple.jpg");
  }
}
    
                   
                   
                   
                   
                   
                   
                   
                   