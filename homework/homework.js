 let state = 0; 

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (state == 0) {
    background(0);
    noStroke();
    fill(250, 197, 197);
    ellipse(mouseX, mouseY, 50, 50);
  }
    else if(state == 1){
    background(0);
    noStroke();
    fill(200, 197, 250);
    ellipse(mouseX, mouseY, 50, 50);
    }  
    else if(state == 2){
    background(0);
    noStroke();
    fill(197, 250, 213);
    ellipse(mouseX, mouseY, 50, 50);
    }
   }

function mousePressed() {
  if (state == 0) {
    state = 1;
  } else if(state == 1){
    state = 2;
  }
    else if(state == 2){
    state = 0;
  }
 }
