const container = document.querySelector('.container');
const button = document.querySelector('button');
const grid = 256;
button.addEventListener('click', () => {
  location.reload();
});

document.addEventListener('DOMContentLoaded', () => {
  createGrid(container, grid);
});

function createGrid(container, size){
  for(let i = 0; i < size; i++){
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'grid-div');
    container.appendChild(newDiv);
  }
}




