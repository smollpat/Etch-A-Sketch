function makeGrid() {
    const container = document.querySelector('div.container');
    const cell = document.createElement('div');
    cell.classList.add('grid-item');
    let size = 600/cellCount - 2;
    container.setAttribute('style', `grid-template-columns: repeat(${cellCount}, ${size}px);`)
    cell.style.width = size;
    cell.style.height = size;
    container.appendChild(cell);

}

const cellCount = 16;
for (let i = 0; i < Math.pow(cellCount, 2); i++) {
    makeGrid();
}

const gridContainer = document.querySelector('div.container');
const cells = document.querySelectorAll('.grid-item');
cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        cell.style.backgroundColor = 'black'
        })
    });