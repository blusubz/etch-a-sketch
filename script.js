// M 



// create loop to create 16 divs and append each 
for (let i = 0; i < 256; i++) {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    let currentBoxClass = `box-${i+1}`; 
    div.classList.add(currentBoxClass);
    
    // hover effect 
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'green';
    });

    container.appendChild(div);
}