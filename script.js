const colors = [
    "rgb(114, 235, 195)",
    "rgb(91, 183, 146)",
    "rgb(50, 124, 99)",
    "rgb(39, 97, 77)",
]

const gridContainer = document.querySelector(".grid-container");

function clearGrid() {
    const gridContainer = document.querySelector(".grid-container");
    
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function createGrid(size) {
    clearGrid();
    for (let i=0; i<size*size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.dataset.hoverCount = 0;
    
        gridItem.addEventListener('mouseover', () => {
            let hoverCount = parseInt(gridItem.dataset.hoverCount);
            if (hoverCount < colors.length){
                gridItem.style.backgroundColor = colors[hoverCount];
                gridItem.dataset.hoverCount = hoverCount + 1;
            }
        });
        gridContainer.appendChild(gridItem);
    }
    gridContainer.style.setProperty('--size', size);
}

createGrid(3);  // Default grid

const sizeButton = document.querySelector(".size-button");
sizeButton.addEventListener('click', () => {
    theSize = parseInt(prompt("Input the size of the grid"), 10);
    if (theSize > 0 && theSize < 100) {
        createGrid(theSize);
    }
    else {
        alert("Invalid size!")
    }
})

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener('click', () => {
    const allItems = document.querySelectorAll(".grid-item");
    allItems.forEach(gridItem => {
        gridItem.style.backgroundColor = "rgb(144, 255, 218)";
        gridItem.dataset.hoverCount = 0;
    })
})