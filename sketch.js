var ship, sailin;
var sea, seaImg;
function preload(){
sailin = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png", )
seaImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200,1,1);
  sea.addImage(seaImg);
  sea.velocityX = -1
  ship = createSprite(100,275,1,1);
  ship.addAnimation("sailin", sailin);
  ship.scale = 0.3
}

function draw() {
  background("blue");
  drawSprites();
  if (sea.x < 0){
    sea.x = sea.width/2
  }
}