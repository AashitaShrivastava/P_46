var ball;
var rect1,rect2,rect3,rect4;
var border1,border2,border3,border4;



function preload(){

}


function setup() {
  createCanvas(1200,800);
  ball = createSprite(30, 30,25,25);
  ball.shapeColor = "magenta";

  border1=createSprite(600, 10,1175,10);
  border1.shapeColor = "black";

  border2=createSprite(10, 395,10,780);
  border2.shapeColor = "black";

  border3=createSprite(600, 790,1190,10);
  border3.shapeColor = "black";

  border4=createSprite(1190,400,10,790);
  border4.shapeColor = "black";

  rect1 = createSprite(40, 50,70,10);
  rect1.shapeColor = "black";

  rect2 = createSprite(80,70,10,50);
  rect2.shapeColor = "black";

  rect3 = createSprite(100, 90,50,10);
  rect3.shapeColor = "black";

  rect4 = createSprite(40, 50,70,10);
  rect4.shapeColor = "black";
  
  rect5 = createSprite(40, 50,70,10);
  rect5.shapeColor = "black";






 ball.velocityX = 4;
 ball.velocityY = 0.6;

 // fixedRect.velocityY = +5;
}

function draw() {
  background("cyan");  

  

  drawSprites();
}
