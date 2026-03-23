// create loop to create 16 divs and append each 
for (let i = 0; i < 256; i++) {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.classList.add(`box-${i+1}`)
    div.textContent = i + 1;
    container.appendChild(div);
}