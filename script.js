// M 

function refreshGrid() {
    let container = document.querySelector('.container');
    container.innerHTML = '';
}

// Grid size selection
let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    // cal refresh grid here?
    refreshGrid();

    input = +prompt('Current grid size is 16x16.\n\nEnter size to create a grid of size 100x100 or less: ');
    
    // limit size to 100x100
    while (input > 100 || input < 1) {
        input = prompt('Size must be of 1 - 100')
    }

    // call createGrid function
    console.log('stub');

    createGrid(input);
});

function createGrid(size) {
    let gridSize = size * size;

    // Initial size is 16x16 grid of divs and append each 
    for (let i = 0; i < gridSize; i++) {
        const container = document.querySelector('.container');
        const div = document.createElement('div');
        let currentBoxClass = `box-${i+1}`; 
        div.classList.add(currentBoxClass);
        
        // hover effect 
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'green';
        });

        // div.textContent = i + 1;

        container.appendChild(div);   
    }
}

// Initial grid start - Size 16x16 
createGrid(16);
