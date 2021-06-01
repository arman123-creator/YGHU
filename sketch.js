var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2=loadImage("treasure.jpg")
  
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(30);
  fill("RED");
  text("NO. OF CORRECT ANSWERS :-  " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 4) {
    clear()
    background(bg2)
    fill("white")
    textSize(40);
    text("TREASURE UNLOCKED",300, 300);
  }

  drawSprites()
}