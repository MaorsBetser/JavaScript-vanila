export default class InputHandler{
  constructor(Snake){
    document.addEventListener('keydown', (e) => {
      console.log(e.key)
      switch(e.key){
        case 'ArrowLeft':
          Snake.moveLeft();
          break;
        case 'ArrowRight':
          Snake.moveRight();
          break;
        case 'ArrowUp':
          Snake.moveUp();
          break;
        case 'ArrowDown':
          Snake.moveDown();
          break;           

      }
    });
  };
}