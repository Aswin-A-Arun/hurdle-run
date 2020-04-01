var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var pls, pl1, pl2, pl3, pl4;

var track, pl1_img, pl2_img, pl3_img, pl4_img;

function preload(){
  track = loadImage(" images/racetrack.jpg");
   pl1_img = loadImage("images/pl1.png");
   pl2_img = loadImage("images/pl2.png");
   pl3_img = loadImage("images/pl3.png");
   pl4_img = loadImage("images/pl4.png");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
