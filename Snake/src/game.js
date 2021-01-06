import Snake from './snake.js';
import InputHandler from './input.js';
import Apple from './apple.js'

export default class Game{
  /*
  TODO
  -Solve the issue with the janky canvas size
  -Add logic for collision
  -Enlarge The snake
  */
  start(){
    this.snake = new Snake();
    this.apple = new Apple();
    new InputHandler(this.snake);
  }
  update(deltaTime){
    this.snake.update(deltaTime);
  }
  draw(ctx){
    this.snake.draw(ctx);
    this.apple.draw(ctx);
  }
}