const container = document.querySelector('div.container');

/* change colors onclick*/
function color(){
    const gridContainer = document.querySelector('div.container');
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach((cell) => {
        cell.addEventListener('click', () => {
            cell.style.backgroundColor = 'black'
            })
        });
    }
function rainbowColor() {
    makeNew();
    const gridContainer = document.querySelector('div.container');
    const cells = document.querySelectorAll('.grid-item');
    function randomizer(){
        let random = Math.floor(Math.random() * 8);
        switch(random) {
            case 0: 
                return 'red';
            case 1: 
                return 'orange';
            case 2:
                return 'yellow';
            case 3: 
                return 'green';
            case 4:
                return 'pink';
            case 5:
                return 'blue';
            case 6:
                return 'magenta;'
        }
    }
    cells.forEach((cell) => {
        cell.addEventListener('click', () => {
            cell.style.backgroundColor = randomizer();
            })
        });
    }

/* initial grid*/
function makeGrid() {
    const cell = document.createElement('div');
    cell.classList.add('grid-item');
    let size = 600/cellCount - 2;
    container.setAttribute('style', `grid-template-columns: repeat(${cellCount}, ${size}px);`)
    cell.style.width = size;
    cell.style.height = size;
    container.appendChild(cell);

}

/* new grid*/
function makeNew(){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    cellCount = Math.round(range.value);
    counter.textContent = Math.round(range.value);
    for (let i = 0; i < Math.pow(cellCount, 2); i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-item');
        let size = 600/cellCount - 2;
        container.setAttribute('style', `grid-template-columns: repeat(${cellCount}, ${size}px);`)
        cell.style.width = size;
        cell.style.height = size;
        container.appendChild(cell);
    }
    color();
}

/* base code*/
let range = document.querySelector('#slider');
let counter = document.querySelector('#counter');
const rainbow = document.querySelector('#rainbow');
const normal = document.querySelector('#normal');
const clear = document.querySelector('#clear');
counter.textContent = 16;
clear.addEventListener('click', makeNew)
range.addEventListener('click', makeNew);
normal.addEventListener('click', color);
rainbow.addEventListener('click', rainbowColor);

let cellCount = Math.round(range.value);
for (let i = 0; i < Math.pow(cellCount, 2); i++) {
        makeGrid();
}
color();




