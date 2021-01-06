import Game from './game.js';

//Get Canvas from HTML and set Size
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
/*
There is a Weird bug with the size of the game width
for some reaseon the canvas itself is not really 600x400
its more like ~300x150~
 */
const gameWidth = 600;
const gameHeight = 400;

let game = new Game(gameWidth, gameHeight);
game.start();

let lastTime = 0;

function updateFrame(timestamp){
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0,0,600,400);
  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(updateFrame);
}

updateFrame();


