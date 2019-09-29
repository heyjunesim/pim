let img;
function preload() {
  img = loadImage('p2back.png');
}

function setup() {
  createCanvas(1440,900);
  image(img,0,0,1440,900) }

function draw() {
  randomSeed(0);
  
  var x,y,r;
  var delta = map(mouseY,0,735,10,20);
  
  for (y=750; y<900; y+=delta) {
    for (x=390; x<495; x+=delta) {
      r = random(0,1);
      if (r<0.2) {
        fill(random(220,240),random(90,110),random(90,110));
        ellipse(x,y,delta,delta)
        stroke(255);
      }
    }
  }
  
  for (y=750; y<900; y+=delta) {
    for (x=663; x<773; x+=delta) {
      r = random(0,1);
      if (r<0.2) {
        fill(random(220,240),random(180,200),random(90,110));
        ellipse(x,y,delta,delta);
        stroke(255);
      }
    }
  }
  
  for (y=750; y<900; y+=delta) {
    for (x=940; x<1050; x+=delta) {
      r = random(0,1);
      if (r<0.2) {
        fill(random(100,120),random(110,130),0);
        ellipse(x,y,delta,delta);
        stroke(255);
      }
    }
  }
  
}
       
      
