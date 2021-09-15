var path ,pathImg,invisibleb,invisible2
var runner,runner_an
function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  runner_an=loadAnimation("runner-1.png","runner-2.png");
}
function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,300,400);
  path.addImage(pathImg);
  path.velocityY=3
  path.scale=1.2;

  runner=createSprite(200,350,50,50);
  runner.addAnimation("runner",runner_an);
  runner.scale=0.07

  invisibleb=createSprite(20,200,10,400)
  invisible2=createSprite(390,200,10,400)
  invisibleb.visible=false;
  invisible2.visible=false;
}

function draw() {
  background("black");
  if(path.y > 400){
  path.y=height/2
  }

  runner.x=World.mouseX

  runner.collide(invisibleb);
  runner.collide(invisible2);
 drawSprites();
}
