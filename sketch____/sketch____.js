function setup() {
  createCanvas(500, 500);
  noFill();
  for(let i=0; i<20; i++){

     a  = int(random(0, 500));
     b  = int(random(0, 500));
     c  = int(random(0, 500));
     d  = int(random(0, 500));
      rect(a, b, c, d);
    }           
}


function draw() {
  
}
