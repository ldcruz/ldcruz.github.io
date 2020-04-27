var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(220);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  if (gameState=="L4"){
    levelFour();
  }
  if (gameState=="L5"){
  }
  
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  background(0, 120, 215);
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>3){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
  ellipse(ballx, bally, ballSize, ballSize);
  //line(ballx, bally, mouseX, mouseY);
  
} // end level one

function levelTwo(){
  background(255, 211, 0);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>6){
// level 3 
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level two

function levelThree(){
    background(177, 18, 38);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>9){
// level 4
   gameState = "L4";
   }
  
  ellipse(ballx, bally, ballSize, ballSize);
} // end level three

function levelFour(){
    background(random(255));
  text("mixing all colors", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize +2;
    score= score +1;
  }
  if(score>12){
// level 4
   gameState = "L5";
   }
  ellipse(ballx, bally, ballSize, ballSize);
} // end level
