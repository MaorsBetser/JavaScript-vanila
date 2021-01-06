export default class Snake {
  constructor(){
    this.width = 10;
    this.height = 10;
    
    this.maxSpeedX = 2;
    this.maxSpeedY = 2;
    this.speedX = 0;
    this.speedY = 0;
  

    this.position = {
      x : 50,
      y : 50
    };
  }


  draw(ctx){
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  


  moveLeft(){
    this.speedX = -this.maxSpeedX;
    this.speedY = 0;
    this.checkDirection(true);
  }
  moveRight(){
    this.speedX = this.maxSpeedX;
    this.speedY = 0
    this.checkDirection(true);
    
  }
  moveUp(){
    this.speedY = -this.maxSpeedY;
    this.speedX = 0;
    this.checkDirection(false);
  }
  moveDown(){
    this.speedY = this.maxSpeedY; 
    this.speedX = 0;
    this.checkDirection(false);
  }


  checkDirection(horizontal){
  if(!horizontal){
    this.width = 10;
    this.height = 10;
  }
  else{
    this.width = 10;
    this.height = 10;
  }
}

  update(deltaTime){
    if(!deltaTime)return;


    this.position.x += this.speedX;
    this.position.y += this.speedY;
    
    if(this.position.x > 290){
      this.position.x = -10;
    }
    else if (this.position.x < -10){
      this.position.x = 290;
    }
    if(this.position.y > 150){
      this.position.y = -10;
    }
    else if (this.position.y < -10){
      this.position.y = 150;
    }

  } 
}