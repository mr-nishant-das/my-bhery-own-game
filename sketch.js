const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var sb_, pbb_, pbb;
var faq_, faq;
var set_, set, set1;
var volm_;
var volp_, volp, volp1;
var song1, song2, song3, song4, song5, song6, song7, song8, song9, song10;
var player1, player1_, player1__, player1___;
var backgroundstuff;
var cartoon, cartoon1;
var gameState = "game1";

function preload(){
  sb_ = loadImage("images/squished brain.jpg");
  pbb_ = loadImage("images/Brain-Cartoon7.jpg");
  faq_ = loadImage("images/faq.png");
  set_ = loadImage("images/settings.png");
  volm_ = loadImage("images/volume mute.png");
  volp_ = loadImage("images/volume play.gif");
  player1_ = loadImage("images/Imported piskel.gif");
  cartoon = createImg("images/volume play.gif");
  cartoon1 = createImg("images/Imported piskel.gif");
  song1 = loadSound("audio files/The score - Legend.mp3");
}
function setup(){
  engine = Engine.create();
  world = engine.world;

  createCanvas(400, 800);
  
  cartoon_width = cartoon.width;
  cartoon_height = cartoon.height;
  cartoon.size(cartoon_width/8, cartoon_height/8);


}
function draw(){
  background("blue");

  if(mousePressedOver(volp)){
    volp.addImage(volm_);
    mousePressed();
  }
  if(mousePressedOver(pbb) && gameState == "game1"){
    pbb.addImage(sb_);
    gameState = "ongame";
    singleplayer();
    image(player1_, 200, 400);
    cartoon1.position(730, 800);
    cartoon.hide();
    set.visibility = 0;
    faq.visibility = 0;
  }
  if(gameState == "game1"){
    ingame();
    image(volp_, 100, 100, 1, 1);
    cartoon.position(860, 930);
    //volp_.resize(10, 10);
  }
  drawSprites();
}
function ingame(){
  pbb = createSprite(200, 250, 10, 10);
  pbb.addImage(pbb_);
  pbb.scale = 0.1;

  faq = createSprite(350, 620, 10, 10);
  faq.addImage(faq_);
  faq.scale = 0.09;

  set = createSprite(360, 680, 10, 10);
  set.addImage(set_);
  set.scale = 0.1;
}
function singleplayer(){
  backgroundstuff = createSprite(200, 400, 5000, 5000);
  backgroundstuff.shapeColor = "yellow";

  set1 = createSprite(30, 50, 10, 10);
  set1.addImage(set_);
  set1.scale = 0.09;

  volp1 = createSprite(100, 50, 10, 10);
  volp1.addImage(volp_);
  volp1.scale = 0.1;
}
function mousePressed(){
  if(song1.isPlaying()){
    song1.stop();
  }
  else{
    song1.play();
  }
}