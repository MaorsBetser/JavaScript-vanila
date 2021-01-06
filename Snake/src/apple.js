export default class Apple{
  constructor(){
    this.width = 5;
    this.height = 5;
    this.position = {
      x : this.getRandomArbitrary(0, 280),
      y : this.getRandomArbitrary(0, 150) 
    }
  }
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  draw(ctx){
    ctx.fillStyle ='#FF0000';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  } 
  
}