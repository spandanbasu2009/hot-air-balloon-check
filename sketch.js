var balloon;
var backgroundImg;

function preload(){
   backgroundImg = loadImage("bg.jpg");
   balloon = loadImage("hot-air-balloon.jpg");
}

function setup() {
  createCanvas(1000,800);
  database = firebase.database();
  //balloon = createSprite(150, 250, 50, 50);
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}