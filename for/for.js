let size = 2;

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() { 
  fill(red, blue, green);
  for(let i=0; i<500; i+=size){
    for(let j=0; j<500; j+=size){
     let red = int(random(0, 256));
     let green = int(random(0, 256));
     let blue = int(random(0, 256));
    
      fill(red, blue, green);
      rect(i, j, size, size);
    }
  }
}
