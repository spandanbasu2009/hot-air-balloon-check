var balloon;
var backgroundImg;

function preload(){
   backgroundImg = loadImage("bg.jpg");
   balloonImg = loadImage("hot-air-balloon.jpg");
}

function setup() {
  createCanvas(1000,800);
  database = firebase.database();
  balloon = createSprite(150, 250, 50, 50);
  balloon.addImage(balloonImg)
  balloon.scale = 0.3;
}

function draw() {
  background(backgroundImg); 

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
  } 
  if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10;
  } 
  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10;
  } 
  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
  } 
  drawSprites();
}