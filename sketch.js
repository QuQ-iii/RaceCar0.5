var canvas, backgroundImage;

var database;

var game, form, player;
var gameState = 0;
var playerCount;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
    

}


function draw(){


}
