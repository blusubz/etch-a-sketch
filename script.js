// M 

function refreshGrid() {
    let container = document.querySelector('.container');
    container.innerHTML = '';
}

// Grid size selection
let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    input = +prompt('Current grid size is 16x16.\n\nEnter size to create a grid of size 100x100 or less: ');
    
    // In case user clicks cancel, current grid stays.
    refreshGrid();

    // limit size to 100x100
    while (input > 100 || input < 1) {
        input = prompt('Size must be of 1 - 100')
    }

    const root = document.documentElement;
    root.style.setProperty('--box-size', input);

    createGrid(input);
});

function createGrid(size) {
    let gridSize = size * size;
    const container = document.querySelector('.container');

    // Initial size is 16x16 grid of divs and append each 
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        let currentBoxClass = `box-${i+1}`; 
        let opacity = 1;
        div.classList.add(currentBoxClass);
        
        // hover effect 
        div.addEventListener('mouseenter', () => {

            // create random RGB colors
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            // run rgb function with random RGB values on backgroundColor
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

            opacity -= 0.1; // subtract 10%
            opacity = opacity.toFixed(1);
            div.style.opacity = `${opacity}`; // update div
        });

        // div.textContent = i + 1;

        container.appendChild(div);   
    }
}

// Initial grid start - Size 16x16 
createGrid(16);
